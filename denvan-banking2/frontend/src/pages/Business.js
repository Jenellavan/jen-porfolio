import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const Business = () => {
  return (
    <div className="info-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Business Banking</h1>
            <p className="page-subtitle">Banking solutions designed to help your business grow</p>
          </div>
        </div>
      </section>
      <section className="content-section bg-light">
        <div className="container">
          <div className="product-grid">
            <div className="product-card">
              <div className="product-header"><div className="product-icon">🏢</div><h3 className="product-name">Business Checking</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>No monthly fees</li><li>Unlimited transactions</li><li>Free online banking</li><li>Mobile deposit</li><li>Business debit cards</li><li>Cash management tools</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Open Account</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">💰</div><h3 className="product-name">Business Loans</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Term loans</li><li>Lines of credit</li><li>SBA loans</li><li>Equipment financing</li><li>Commercial real estate</li><li>Fast approval</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Apply Now</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">💳</div><h3 className="product-name">Business Credit Cards</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Cash back rewards</li><li>Employee cards</li><li>Expense tracking</li><li>No annual fee</li><li>High credit limits</li><li>Purchase protection</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Apply Now</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">💵</div><h3 className="product-name">Merchant Services</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Credit card processing</li><li>POS systems</li><li>Online payments</li><li>Mobile processing</li><li>Next-day funding</li><li>Competitive rates</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Grow Your Business with Denvan</h2>
            <p className="cta-text">Partner with us for your business banking needs</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Business;
