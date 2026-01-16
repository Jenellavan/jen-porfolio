import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { accountService, transactionService } from '../services/api';
import './Transfer.css';

const Transfer = () => {
  const { account } = useAuth();
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    fromAccountId: '',
    toAccountNumber: '',
    amount: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await accountService.getAccounts();
      setAccounts(response.data.data);
      
      // Set default account
      if (response.data.data.length > 0) {
        setFormData(prev => ({
          ...prev,
          fromAccountId: response.data.data[0]._id
        }));
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validate amount
    if (parseFloat(formData.amount) <= 0) {
      setError('Amount must be greater than 0');
      setLoading(false);
      return;
    }

    try {
      const response = await transactionService.transfer(formData);
      
      setSuccess(`Transfer of $${formData.amount} completed successfully!`);
      
      // Reset form
      setFormData({
        ...formData,
        toAccountNumber: '',
        amount: '',
        description: ''
      });

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'Transfer failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const selectedAccount = accounts.find(acc => acc._id === formData.fromAccountId);

  return (
    <div className="transfer-page">
      <div className="container">
        <div className="transfer-container">
          <div className="transfer-header">
            <h1 className="transfer-title">Transfer Money</h1>
            <p className="transfer-subtitle">Send money to another account</p>
          </div>

          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              {success}
            </div>
          )}

          {selectedAccount && (
            <div className="balance-info">
              <span>Available Balance:</span>
              <strong>
                ${selectedAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </strong>
            </div>
          )}

          <form onSubmit={handleSubmit} className="transfer-form">
            <div className="form-group">
              <label className="form-label">From Account</label>
              <select
                name="fromAccountId"
                className="form-select"
                value={formData.fromAccountId}
                onChange={handleChange}
                required
              >
                {accounts.map((acc) => (
                  <option key={acc._id} value={acc._id}>
                    {acc.accountType} - ••••{acc.accountNumber.slice(-4)} 
                    (${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Recipient Account Number</label>
              <input
                type="text"
                name="toAccountNumber"
                className="form-input"
                placeholder="Enter recipient's account number"
                value={formData.toAccountNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Amount</label>
              <div className="amount-input-wrapper">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  name="amount"
                  className="form-input amount-input"
                  placeholder="0.00"
                  step="0.01"
                  min="0.01"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description (Optional)</label>
              <textarea
                name="description"
                className="form-input"
                placeholder="What's this transfer for?"
                rows="3"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="transfer-actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => navigate('/dashboard')}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Transfer Money'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
