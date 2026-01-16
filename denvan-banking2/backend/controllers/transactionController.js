const { validationResult } = require('express-validator');
const Transaction = require('../models/Transaction');
const Account = require('../models/Account');
const mongoose = require('mongoose');

// Get user's transactions
exports.getTransactions = async (req, res) => {
  try {
    const { limit = 50, page = 1 } = req.query;

    // Get user's accounts
    const accounts = await Account.find({ user: req.userId });
    const accountIds = accounts.map(acc => acc._id);

    // Find transactions
    const transactions = await Transaction.find({
      $or: [
        { fromAccount: { $in: accountIds } },
        { toAccount: { $in: accountIds } }
      ]
    })
      .populate('fromAccount', 'accountNumber accountType')
      .populate('toAccount', 'accountNumber accountType')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Transaction.countDocuments({
      $or: [
        { fromAccount: { $in: accountIds } },
        { toAccount: { $in: accountIds } }
      ]
    });

    res.json({
      success: true,
      count: transactions.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: transactions
    });
  } catch (error) {
    console.error('Get transactions error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching transactions',
      error: error.message
    });
  }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
      .populate('fromAccount', 'accountNumber accountType user')
      .populate('toAccount', 'accountNumber accountType user');

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    // Check if user owns either account
    const userOwnsAccount = 
      transaction.fromAccount.user.toString() === req.userId.toString() ||
      (transaction.toAccount && transaction.toAccount.user.toString() === req.userId.toString());

    if (!userOwnsAccount) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      data: transaction
    });
  } catch (error) {
    console.error('Get transaction error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching transaction',
      error: error.message
    });
  }
};

// Make a transfer
exports.transfer = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { fromAccountId, toAccountNumber, amount, description } = req.body;

    // Get sender's account
    const fromAccount = await Account.findOne({
      _id: fromAccountId,
      user: req.userId
    }).session(session);

    if (!fromAccount) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Source account not found'
      });
    }

    // Check if sender's account is active
    if (fromAccount.status !== 'active') {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Source account is not active'
      });
    }

    // Check if sender has sufficient balance
    if (!fromAccount.canTransact(amount)) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Insufficient funds'
      });
    }

    // Get recipient's account
    const toAccount = await Account.findOne({
      accountNumber: toAccountNumber,
      status: 'active'
    }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Recipient account not found or inactive'
      });
    }

    // Can't transfer to same account
    if (fromAccount._id.toString() === toAccount._id.toString()) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Cannot transfer to the same account'
      });
    }

    // Deduct from sender
    fromAccount.balance -= parseFloat(amount);
    await fromAccount.save({ session });

    // Add to recipient
    toAccount.balance += parseFloat(amount);
    await toAccount.save({ session });

    // Create transaction record
    const transaction = new Transaction({
      fromAccount: fromAccount._id,
      toAccount: toAccount._id,
      type: 'transfer',
      amount: parseFloat(amount),
      description: description || `Transfer to ${toAccountNumber}`,
      status: 'completed',
      balanceAfter: fromAccount.balance
    });

    await transaction.save({ session });

    // Commit transaction
    await session.commitTransaction();

    // Populate account details for response
    await transaction.populate('fromAccount', 'accountNumber accountType');
    await transaction.populate('toAccount', 'accountNumber accountType');

    res.json({
      success: true,
      message: 'Transfer completed successfully',
      data: {
        transaction,
        newBalance: fromAccount.balance
      }
    });
  } catch (error) {
    await session.abortTransaction();
    console.error('Transfer error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing transfer',
      error: error.message
    });
  } finally {
    session.endSession();
  }
};
