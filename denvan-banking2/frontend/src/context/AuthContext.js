import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem('user');
    const storedAccount = localStorage.getItem('account');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedAccount && storedToken) {
      setUser(JSON.parse(storedUser));
      setAccount(JSON.parse(storedAccount));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      const { user, account, token } = response.data;

      setUser(user);
      setAccount(account);
      setToken(token);

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('account', JSON.stringify(account));
      localStorage.setItem('token', token);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      const { user, account, token } = response.data;

      setUser(user);
      setAccount(account);
      setToken(token);

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('account', JSON.stringify(account));
      localStorage.setItem('token', token);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  const logout = () => {
    setUser(null);
    setAccount(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('account');
    localStorage.removeItem('token');
  };

  const updateAccount = (updatedAccount) => {
    setAccount(updatedAccount);
    localStorage.setItem('account', JSON.stringify(updatedAccount));
  };

  const value = {
    user,
    account,
    token,
    loading,
    login,
    register,
    logout,
    updateAccount,
    isAuthenticated: !!token
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
