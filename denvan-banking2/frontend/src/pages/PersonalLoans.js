import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const PersonalLoans = () => {
  return (
    <div className="info-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Personal Loans</h1>
            <p className="page-subtitle">Get the funds you need for life's important moments. 
            Competitive rates, flexible terms, and quick approval.</p>
          </div>
        </div>
      </section>

      <section className="content-section bg-white">
        <div className="container">
          <div className="two-column-layout">
            <div className="column-content">
              <h2 className="section-heading">Borrow $1,000 - $50,000</h2>
              <p className="text-body">
                Whether you need to consolidate debt, make a large purchase, or cover unexpected expenses, 
                a personal loan from Denvan Banking can help you achieve your goals.
              </p>
              <ul className="check-list" style={{background: 'white', padding: '20px'}}>
                <li>Fixed interest rates</li>
                <li>No collateral required</li>
                <li>Terms from 12 to 60 months</li>
                <li>Same-day approval</li>
                <li>Flexible payment dates</li>
                <li>No prepayment penalties</li>
              </ul>
            </div>
            <div className="column-content">
              <div className="info-box">
                <h3>Loan Calculator</h3>
                <p>Estimated monthly payment for a $10,000 loan:</p>
                <div style={{fontSize: '32px', fontWeight: '700', color: 'var(--gold)', margin: '20px 0'}}>
                  $194/mo
                </div>
                <p style={{fontSize: '14px', opacity: '0.9'}}>
                  Based on 60-month term at 7.99% APR
                </p>
                <Link to="/register" className="btn btn-primary" style={{width: '100%', marginTop: '20px'}}>
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Common Uses for Personal Loans</h2>
          <div className="grid grid-3">
            <div className="value-card">
              <div className="value-icon">💳</div>
              <h3>Debt Consolidation</h3>
              <p>Combine multiple high-interest debts into one lower payment</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3>Home Improvement</h3>
              <p>Renovate your home and increase its value</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💍</div>
              <h3>Wedding Expenses</h3>
              <p>Finance your dream wedding</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏥</div>
              <h3>Medical Bills</h3>
              <p>Cover unexpected healthcare costs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✈️</div>
              <h3>Vacation</h3>
              <p>Make memories without breaking the bank</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚗</div>
              <h3>Vehicle Repairs</h3>
              <p>Get back on the road quickly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Get Your Personal Loan Today</h2>
            <p className="cta-text">Apply online in minutes and get a decision fast.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalLoans;
