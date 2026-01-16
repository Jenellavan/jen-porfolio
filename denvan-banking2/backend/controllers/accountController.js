const Account = require('../models/Account');

// Get all user accounts
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.userId });

    res.json({
      success: true,
      count: accounts.length,
      data: accounts
    });
  } catch (error) {
    console.error('Get accounts error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching accounts',
      error: error.message
    });
  }
};

// Get account by ID
exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findOne({
      _id: req.params.id,
      user: req.userId
    });

    if (!account) {
      return res.status(404).json({
        success: false,
        message: 'Account not found'
      });
    }

    res.json({
      success: true,
      data: account
    });
  } catch (error) {
    console.error('Get account error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching account',
      error: error.message
    });
  }
};

// Create new account
exports.createAccount = async (req, res) => {
  try {
    const { accountType } = req.body;

    // Check if user already has this type of account
    const existingAccount = await Account.findOne({
      user: req.userId,
      accountType,
      status: 'active'
    });

    if (existingAccount) {
      return res.status(400).json({
        success: false,
        message: `You already have an active ${accountType} account`
      });
    }

    const account = new Account({
      user: req.userId,
      accountType
    });

    await account.save();

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      data: account
    });
  } catch (error) {
    console.error('Create account error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating account',
      error: error.message
    });
  }
};
