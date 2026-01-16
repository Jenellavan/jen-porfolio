const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  type: {
    type: String,
    enum: ['transfer', 'deposit', 'withdrawal', 'payment'],
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0.01
  },
  currency: {
    type: String,
    default: 'USD'
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'cancelled'],
    default: 'completed'
  },
  reference: {
    type: String,
    unique: true
  },
  balanceAfter: {
    type: Number
  }
}, {
  timestamps: true
});

// Generate unique reference number
transactionSchema.pre('save', async function(next) {
  if (!this.reference) {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.reference = `TXN${timestamp}${randomStr}`;
  }
  next();
});

module.exports = mongoose.model('Transaction', transactionSchema);
