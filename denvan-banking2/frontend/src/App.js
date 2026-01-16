import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
import About from './pages/About';
import Checking from './pages/Checking';
import Savings from './pages/Savings';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import PersonalLoans from './pages/PersonalLoans';
import Services from './pages/Services';
import Investments from './pages/Investments';
import Membership from './pages/Membership';
import Business from './pages/Business';
import HelpCenter from './pages/HelpCenter';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/checking" element={<Checking />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/personal-loans" element={<PersonalLoans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/business" element={<Business />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/transfer"
              element={
                <PrivateRoute>
                  <Transfer />
                </PrivateRoute>
              }
            />
            <Route
              path="/transactions"
              element={
                <PrivateRoute>
                  <Transactions />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
