import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-column">
              <h3 className="footer-heading">About Denvan</h3>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/membership">Membership</Link></li>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/news">News & Updates</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Accounts Section */}
            <div className="footer-column">
              <h3 className="footer-heading">Accounts</h3>
              <ul className="footer-links">
                <li><Link to="/checking">Checking</Link></li>
                <li><Link to="/savings">Savings</Link></li>
                <li><Link to="/credit-cards">Credit Cards</Link></li>
                <li><Link to="/investments">Investments</Link></li>
                <li><Link to="/youth-accounts">Youth Accounts</Link></li>
              </ul>
            </div>

            {/* Loans Section */}
            <div className="footer-column">
              <h3 className="footer-heading">Loans</h3>
              <ul className="footer-links">
                <li><Link to="/loans#home">Home Loans</Link></li>
                <li><Link to="/loans#auto">Auto Loans</Link></li>
                <li><Link to="/personal-loans">Personal Loans</Link></li>
                <li><Link to="/loans#student">Student Loans</Link></li>
                <li><Link to="/business">Business Loans</Link></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-column">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/mobile-banking">Mobile Banking</Link></li>
                <li><Link to="/online-banking">Online Banking</Link></li>
                <li><Link to="/bill-pay">Bill Pay</Link></li>
                <li><Link to="/atm-locator">ATM Locator</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="footer-column">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-links">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/security">Security Center</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="footer-contact">
        <div className="container">
          <div className="footer-contact-content">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <div className="contact-label">Call Us 24/7</div>
                <a href="tel:1-888-336-8261" className="contact-value">1-888-DENVAN-1</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <div>
                <div className="contact-label">Live Chat</div>
                <button className="contact-value contact-btn">Start Chat</button>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <div className="contact-label">Find a Branch</div>
                <Link to="/locations" className="contact-value">View Locations</Link>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <div className="contact-label">Email Support</div>
                <a href="mailto:support@denvanbanking.com" className="contact-value">support@denvanbanking.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">f</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">𝕏</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">in</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">▶</span>
              </a>
            </div>
            <div className="footer-legal">
              <p className="footer-copyright">
                © 2024 Denvan Banking. All Rights Reserved.
              </p>
              <div className="footer-legal-links">
                <Link to="/privacy">Privacy</Link>
                <span className="footer-divider">|</span>
                <Link to="/terms">Terms</Link>
                <span className="footer-divider">|</span>
                <Link to="/security">Security</Link>
                <span className="footer-divider">|</span>
                <Link to="/sitemap">Sitemap</Link>
              </div>
            </div>
          </div>
          <div className="footer-disclaimer">
            <p>
              <strong>Important Information:</strong> Denvan Banking is a member-owned financial cooperative. 
              Your deposits are federally insured to at least $250,000 and backed by the full faith and credit 
              of the United States Government. NCUA - National Credit Union Administration, a U.S. Government Agency.
            </p>
            <p style={{ marginTop: '12px' }}>
              APR = Annual Percentage Rate. APY = Annual Percentage Yield. All rates, fees, and terms are subject 
              to change without notice. Please contact us for current rates and complete details.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
