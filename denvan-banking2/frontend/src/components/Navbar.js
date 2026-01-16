import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="container">
          <div className="navbar-top-content">
            <div className="navbar-top-links">
              <Link to="/help" className="navbar-top-link">Help Center</Link>
              <span className="navbar-divider">|</span>
              <Link to="/about" className="navbar-top-link">About Us</Link>
              <span className="navbar-divider">|</span>
              <a href="tel:1-888-336-8261" className="navbar-top-link">📞 1-888-DENVAN-1</a>
            </div>
            <div className="navbar-top-right">
              {!isAuthenticated && (
                <>
                  <Link to="/login" className="btn-sign-in">Sign In</Link>
                  <Link to="/register" className="btn-join-now">Join Now</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <Logo size={40} />
            <span className="brand-text">Denvan Banking</span>
          </Link>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <div className={`navbar-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="nav-link" onClick={closeMobileMenu}>Dashboard</Link>
                <Link to="/transfer" className="nav-link" onClick={closeMobileMenu}>Transfer</Link>
                <Link to="/transactions" className="nav-link" onClick={closeMobileMenu}>Transactions</Link>
                <Link to="/profile" className="nav-link" onClick={closeMobileMenu}>Profile</Link>
                <div className="nav-user">
                  <span className="user-name">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <button onClick={handleLogout} className="btn btn-outline btn-small">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="nav-dropdown">
                  <button className="nav-link" onClick={() => toggleDropdown('accounts')}>
                    Accounts ▾
                  </button>
                  {activeDropdown === 'accounts' && (
                    <div className="dropdown-menu">
                      <Link to="/checking" className="dropdown-item" onClick={closeMobileMenu}>
                        <strong>Checking</strong>
                        <span className="dropdown-desc">Everyday banking made easy</span>
                      </Link>
                      <Link to="/savings" className="dropdown-item" onClick={closeMobileMenu}>
                        <strong>Savings</strong>
                        <span className="dropdown-desc">Grow your money with competitive rates</span>
                      </Link>
                      <Link to="/credit-cards" className="dropdown-item" onClick={closeMobileMenu}>
                        <strong>Credit Cards</strong>
                        <span className="dropdown-desc">Rewards and benefits</span>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="nav-dropdown">
                  <button className="nav-link" onClick={() => toggleDropdown('loans')}>
                    Loans ▾
                  </button>
                  {activeDropdown === 'loans' && (
                    <div className="dropdown-menu">
                      <Link to="/loans" className="dropdown-item" onClick={closeMobileMenu}>
                        <strong>All Loans</strong>
                        <span className="dropdown-desc">View all loan options</span>
                      </Link>
                      <Link to="/personal-loans" className="dropdown-item" onClick={closeMobileMenu}>
                        <strong>Personal Loans</strong>
                        <span className="dropdown-desc">Borrow $1K - $50K</span>
                      </Link>
                      <Link to="/loans#home" className="dropdown-item" onClick={closeMobileMenu}>
                        <strong>Home Loans</strong>
                        <span className="dropdown-desc">Finance your dream home</span>
                      </Link>
                      <Link to="/loans#auto" className="dropdown-item" onClick={closeMobileMenu}>
                        <strong>Auto Loans</strong>
                        <span className="dropdown-desc">New & used vehicles</span>
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/investments" className="nav-link" onClick={closeMobileMenu}>Invest</Link>
                <Link to="/services" className="nav-link" onClick={closeMobileMenu}>Services</Link>
                <Link to="/business" className="nav-link" onClick={closeMobileMenu}>Business</Link>
                
                <div className="nav-mobile-buttons">
                  <Link to="/login" className="btn btn-outline btn-small" onClick={closeMobileMenu}>
                    Sign In
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-small" onClick={closeMobileMenu}>
                    Join Now
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
