const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const accountController = require('../controllers/accountController');

// All routes require authentication
router.use(auth);

// Get user's accounts
router.get('/', accountController.getAccounts);

// Get specific account
router.get('/:id', accountController.getAccountById);

// Create new account
router.post('/', accountController.createAccount);

module.exports = router;
