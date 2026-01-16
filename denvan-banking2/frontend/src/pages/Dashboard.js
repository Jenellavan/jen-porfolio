import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { accountService, transactionService } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const { user, account, updateAccount } = useAuth();
  const [accounts, setAccounts] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch accounts
      const accountsResponse = await accountService.getAccounts();
      setAccounts(accountsResponse.data.data);
      
      // Update primary account in context
      if (accountsResponse.data.data.length > 0) {
        updateAccount(accountsResponse.data.data[0]);
      }

      // Fetch recent transactions
      const transactionsResponse = await transactionService.getTransactions({ limit: 5 });
      setRecentTransactions(transactionsResponse.data.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">
            Welcome back, {user?.firstName}! 👋
          </h1>
          <p className="dashboard-subtitle">
            Here's an overview of your accounts
          </p>
        </div>

        <div className="grid grid-2">
          {/* Account Cards */}
          {accounts.map((acc) => (
            <div key={acc._id} className="account-card">
              <div className="account-header">
                <div>
                  <span className="account-type">{acc.accountType} Account</span>
                  <p className="account-number">••••  {acc.accountNumber.slice(-4)}</p>
                </div>
                <div className={`account-status ${acc.status}`}>
                  {acc.status}
                </div>
              </div>
              <div className="account-balance">
                <span className="balance-label">Available Balance</span>
                <h2 className="balance-amount">{formatCurrency(acc.balance)}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            <Link to="/transfer" className="action-card">
              <div className="action-icon">💸</div>
              <h3>Transfer Money</h3>
              <p>Send money to another account</p>
            </Link>
            <Link to="/transactions" className="action-card">
              <div className="action-icon">📊</div>
              <h3>View Transactions</h3>
              <p>See all your transaction history</p>
            </Link>
            <Link to="/profile" className="action-card">
              <div className="action-icon">👤</div>
              <h3>Profile Settings</h3>
              <p>Update your account information</p>
            </Link>
          </div>
        </div>

        <div className="recent-transactions">
          <div className="section-header">
            <h2 className="section-title">Recent Transactions</h2>
            <Link to="/transactions" className="view-all-link">
              View All →
            </Link>
          </div>

          {recentTransactions.length === 0 ? (
            <div className="empty-state">
              <p>No transactions yet</p>
            </div>
          ) : (
            <div className="transactions-list">
              {recentTransactions.map((transaction) => (
                <div key={transaction._id} className="transaction-item">
                  <div className="transaction-info">
                    <div className={`transaction-icon ${transaction.type}`}>
                      {transaction.type === 'transfer' && transaction.fromAccount._id === account?.id ? '↑' : '↓'}
                    </div>
                    <div>
                      <h4 className="transaction-description">
                        {transaction.description}
                      </h4>
                      <p className="transaction-date">{formatDate(transaction.createdAt)}</p>
                    </div>
                  </div>
                  <div className={`transaction-amount ${
                    transaction.fromAccount._id === account?.id ? 'debit' : 'credit'
                  }`}>
                    {transaction.fromAccount._id === account?.id ? '-' : '+'}
                    {formatCurrency(transaction.amount)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
