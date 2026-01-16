const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const transactionController = require('../controllers/transactionController');

// All routes require authentication
router.use(auth);

// Validation for transfer
const transferValidation = [
  body('fromAccountId').notEmpty().withMessage('From account is required'),
  body('toAccountNumber').notEmpty().withMessage('Recipient account number is required'),
  body('amount').isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0'),
  body('description').optional().trim()
];

// Get user's transactions
router.get('/', transactionController.getTransactions);

// Get transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Make a transfer
router.post('/transfer', transferValidation, transactionController.transfer);

module.exports = router;
