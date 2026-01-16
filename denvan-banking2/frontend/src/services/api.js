import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('account');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (email, password) => api.post('/auth/login', { email, password })
};

// User services
export const userService = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData)
};

// Account services
export const accountService = {
  getAccounts: () => api.get('/accounts'),
  getAccountById: (id) => api.get(`/accounts/${id}`),
  createAccount: (accountType) => api.post('/accounts', { accountType })
};

// Transaction services
export const transactionService = {
  getTransactions: (params) => api.get('/transactions', { params }),
  getTransactionById: (id) => api.get(`/transactions/${id}`),
  transfer: (transferData) => api.post('/transactions/transfer', transferData)
};

export default api;
