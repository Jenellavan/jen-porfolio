import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const Checking = () => {
  return (
    <div className="info-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Checking Accounts</h1>
            <p className="page-subtitle">
              Experience everyday banking made simple. Open a checking account with 
              no monthly fees, free online banking, and 24/7 access to your money.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Choose Your Checking Account</h2>
          <p className="section-intro text-center">
            Find the perfect checking account for your lifestyle
          </p>

          <div className="product-grid">
            {/* Everyday Checking */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">💳</div>
                <h3 className="product-name">Everyday Checking</h3>
                <p className="product-tagline">Perfect for daily banking</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>No monthly maintenance fees</li>
                  <li>No minimum balance required</li>
                  <li>Free debit card</li>
                  <li>Mobile & online banking</li>
                  <li>Bill pay included</li>
                  <li>Overdraft protection available</li>
                </ul>
                <div className="product-rate">
                  <strong>$0</strong> monthly fee
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Open Account
                </Link>
              </div>
            </div>

            {/* Premium Checking */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">⭐</div>
                <h3 className="product-name">Premium Checking</h3>
                <p className="product-tagline">Enhanced features & benefits</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>All Everyday Checking features</li>
                  <li>Higher interest rates</li>
                  <li>Free checks</li>
                  <li>ATM fee reimbursement</li>
                  <li>Premium rewards program</li>
                  <li>Dedicated customer support</li>
                </ul>
                <div className="product-rate">
                  <strong>0.15%</strong> APY
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Open Account
                </Link>
              </div>
            </div>

            {/* Student Checking */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🎓</div>
                <h3 className="product-name">Student Checking</h3>
                <p className="product-tagline">Built for students</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>No monthly fees for students</li>
                  <li>No minimum balance</li>
                  <li>Free mobile banking</li>
                  <li>Student discounts</li>
                  <li>Financial literacy tools</li>
                  <li>Easy parental transfers</li>
                </ul>
                <div className="product-rate">
                  <strong>Free</strong> until age 24
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Open Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section bg-white">
        <div className="container">
          <h2 className="section-heading text-center">Checking Account Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon-box">📱</div>
              <div className="feature-content">
                <h4>Mobile Banking</h4>
                <p>Manage your money on the go with our award-winning mobile app. 
                Deposit checks, transfer funds, and pay bills anytime, anywhere.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">🔒</div>
              <div className="feature-content">
                <h4>Security & Protection</h4>
                <p>Your account is protected by advanced security features including fraud 
                monitoring, instant alerts, and FDIC insurance up to $250,000.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">💰</div>
              <div className="feature-content">
                <h4>Overdraft Protection</h4>
                <p>Link your savings account for automatic overdraft protection and avoid 
                insufficient fund fees.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">🏧</div>
              <div className="feature-content">
                <h4>ATM Access</h4>
                <p>Access your money at thousands of ATMs nationwide. Premium account 
                holders get ATM fee reimbursement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Compare Checking Accounts</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Everyday</th>
                  <th>Premium</th>
                  <th>Student</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Fee</td>
                  <td>$0</td>
                  <td>$0</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Minimum Balance</td>
                  <td>None</td>
                  <td>$2,500</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Interest Rate (APY)</td>
                  <td>0.01%</td>
                  <td>0.15%</td>
                  <td>0.01%</td>
                </tr>
                <tr>
                  <td>Free Checks</td>
                  <td>First order</td>
                  <td>Unlimited</td>
                  <td>First order</td>
                </tr>
                <tr>
                  <td>ATM Fee Reimbursement</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Rewards Program</td>
                  <td>Basic</td>
                  <td>Premium</td>
                  <td>Student perks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="two-column-layout">
            <div className="column-content">
              <h2 className="section-heading">How to Open an Account</h2>
              <p className="text-body">
                Opening a checking account with Denvan Banking is quick and easy. 
                You can complete the entire process online in just minutes.
              </p>
              <div className="requirements-box">
                <h3>What You'll Need:</h3>
                <ul>
                  <li>Valid government-issued ID (driver's license or passport)</li>
                  <li>Social Security Number or Tax ID</li>
                  <li>Proof of address (utility bill or lease agreement)</li>
                  <li>Initial deposit (as low as $25)</li>
                  <li>Email address and phone number</li>
                </ul>
              </div>
            </div>
            <div className="column-content">
              <div className="info-box">
                <h3>Why Choose Our Checking?</h3>
                <ul className="check-list">
                  <li>No hidden fees or surprises</li>
                  <li>Award-winning mobile app</li>
                  <li>24/7 customer support</li>
                  <li>Instant debit card</li>
                  <li>Easy account management</li>
                  <li>Seamless money transfers</li>
                  <li>Bill pay included free</li>
                  <li>FDIC insured</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Open Your Checking Account?</h2>
            <p className="cta-text">
              Join thousands of satisfied members who trust Denvan Banking for their everyday needs.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Open Account Now
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checking;
