import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { transactionService } from '../services/api';
import './Transactions.css';

const Transactions = () => {
  const { account } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  });

  useEffect(() => {
    fetchTransactions();
  }, [pagination.page]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await transactionService.getTransactions({
        page: pagination.page,
        limit: pagination.limit
      });

      setTransactions(response.data.data);
      setPagination(prev => ({
        ...prev,
        total: response.data.total,
        pages: response.data.pages
      }));
    } catch (error) {
      console.error('Error fetching transactions:', error);
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
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  if (loading && transactions.length === 0) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="transactions-page">
      <div className="container">
        <div className="transactions-header">
          <h1 className="transactions-title">Transaction History</h1>
          <p className="transactions-subtitle">
            View all your transactions
          </p>
        </div>

        {transactions.length === 0 ? (
          <div className="empty-state-card">
            <div className="empty-icon">📊</div>
            <h3>No Transactions Yet</h3>
            <p>Your transaction history will appear here</p>
          </div>
        ) : (
          <>
            <div className="transactions-container">
              {transactions.map((transaction) => {
                const isDebit = transaction.fromAccount._id === account?.id;
                
                return (
                  <div key={transaction._id} className="transaction-card">
                    <div className="transaction-main">
                      <div className="transaction-left">
                        <div className={`transaction-type-icon ${transaction.type} ${isDebit ? 'debit' : 'credit'}`}>
                          {isDebit ? '↑' : '↓'}
                        </div>
                        <div className="transaction-details">
                          <h3 className="transaction-title">
                            {transaction.description}
                          </h3>
                          <div className="transaction-meta">
                            <span className="transaction-date">
                              {formatDate(transaction.createdAt)}
                            </span>
                            <span className="transaction-separator">•</span>
                            <span className="transaction-reference">
                              {transaction.reference}
                            </span>
                          </div>
                          <div className="transaction-accounts">
                            {isDebit ? (
                              <>
                                From: ••••{transaction.fromAccount.accountNumber?.slice(-4)} → 
                                To: ••••{transaction.toAccount?.accountNumber?.slice(-4)}
                              </>
                            ) : (
                              <>
                                From: ••••{transaction.fromAccount.accountNumber?.slice(-4)} → 
                                To: ••••{transaction.toAccount?.accountNumber?.slice(-4)}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="transaction-right">
                        <div className={`transaction-amount-large ${isDebit ? 'debit' : 'credit'}`}>
                          {isDebit ? '-' : '+'}
                          {formatCurrency(transaction.amount)}
                        </div>
                        <div className={`transaction-status ${transaction.status}`}>
                          {transaction.status}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {pagination.pages > 1 && (
              <div className="pagination">
                <button
                  className="btn btn-outline"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                >
                  Previous
                </button>
                <span className="pagination-info">
                  Page {pagination.page} of {pagination.pages}
                </span>
                <button
                  className="btn btn-outline"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.pages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Transactions;
