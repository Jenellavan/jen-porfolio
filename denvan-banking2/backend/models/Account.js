const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  accountType: {
    type: String,
    enum: ['savings', 'checking', 'business'],
    default: 'checking'
  },
  balance: {
    type: Number,
    default: 0,
    min: 0
  },
  currency: {
    type: String,
    default: 'USD'
  },
  status: {
    type: String,
    enum: ['active', 'frozen', 'closed'],
    default: 'active'
  },
  overdraftLimit: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Generate unique account number
accountSchema.pre('save', async function(next) {
  if (!this.accountNumber) {
    // Generate 10-digit account number
    this.accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }
  next();
});

// Method to check if account can perform transaction
accountSchema.methods.canTransact = function(amount) {
  return this.status === 'active' && (this.balance + this.overdraftLimit) >= amount;
};

module.exports = mongoose.model('Account', accountSchema);
