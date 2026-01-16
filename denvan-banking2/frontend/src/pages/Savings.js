import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const Savings = () => {
  return (
    <div className="info-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Savings Accounts</h1>
            <p className="page-subtitle">
              Grow your money with competitive rates and flexible savings options. 
              Start building your financial future today.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Find Your Savings Solution</h2>
          <p className="section-intro text-center">
            Choose from our range of savings products designed to help you reach your goals
          </p>

          <div className="product-grid">
            {/* Regular Savings */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🏦</div>
                <h3 className="product-name">Regular Savings</h3>
                <p className="product-tagline">Your everyday savings account</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>No monthly fees</li>
                  <li>$25 minimum to open</li>
                  <li>Unlimited deposits</li>
                  <li>6 free withdrawals per month</li>
                  <li>Mobile & online access</li>
                  <li>Automatic transfers available</li>
                </ul>
                <div className="product-rate">
                  <strong>0.50%</strong> APY
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Open Account
                </Link>
              </div>
            </div>

            {/* High-Yield Savings */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">💎</div>
                <h3 className="product-name">High-Yield Savings</h3>
                <p className="product-tagline">Maximize your earnings</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>All Regular Savings features</li>
                  <li>Premium interest rate</li>
                  <li>$1,000 minimum balance</li>
                  <li>Tiered interest rates</li>
                  <li>Priority customer service</li>
                  <li>Quarterly bonus interest</li>
                </ul>
                <div className="product-rate">
                  <strong>4.50%</strong> APY
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Open Account
                </Link>
              </div>
            </div>

            {/* Money Market */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">📈</div>
                <h3 className="product-name">Money Market</h3>
                <p className="product-tagline">Higher rates, more flexibility</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Competitive variable rates</li>
                  <li>$2,500 minimum balance</li>
                  <li>Check writing privileges</li>
                  <li>Debit card access</li>
                  <li>Unlimited deposits</li>
                  <li>Limited monthly transactions</li>
                </ul>
                <div className="product-rate">
                  <strong>3.75%</strong> APY
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Open Account
                </Link>
              </div>
            </div>

            {/* Certificates of Deposit */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">📜</div>
                <h3 className="product-name">Certificates of Deposit</h3>
                <p className="product-tagline">Guaranteed returns</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Fixed rate for entire term</li>
                  <li>Terms from 3 to 60 months</li>
                  <li>$500 minimum deposit</li>
                  <li>FDIC insured</li>
                  <li>Automatic renewal option</li>
                  <li>Early withdrawal available*</li>
                </ul>
                <div className="product-rate">
                  <strong>5.00%</strong> APY
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  View Rates
                </Link>
              </div>
            </div>

            {/* Youth Savings */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🎈</div>
                <h3 className="product-name">Youth Savings</h3>
                <p className="product-tagline">Build good habits early</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>For children under 18</li>
                  <li>No monthly fees</li>
                  <li>$10 minimum to open</li>
                  <li>Parent co-owner required</li>
                  <li>Financial education tools</li>
                  <li>Bonus interest on savings goals</li>
                </ul>
                <div className="product-rate">
                  <strong>1.00%</strong> APY
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Open Account
                </Link>
              </div>
            </div>

            {/* Goal Saver */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🎯</div>
                <h3 className="product-name">Goal Saver</h3>
                <p className="product-tagline">Save for what matters</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Create multiple savings goals</li>
                  <li>Automatic savings plans</li>
                  <li>Track progress visually</li>
                  <li>Bonus interest on milestones</li>
                  <li>No minimum balance</li>
                  <li>Flexible contributions</li>
                </ul>
                <div className="product-rate">
                  <strong>0.75%</strong> APY + bonuses
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Start Saving
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="content-section bg-white">
        <div className="container">
          <h2 className="section-heading text-center">Compare Savings Rates</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Account Type</th>
                  <th>APY</th>
                  <th>Min. Balance</th>
                  <th>Min. Opening</th>
                  <th>Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Regular Savings</td>
                  <td>0.50%</td>
                  <td>$0</td>
                  <td>$25</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>High-Yield Savings</td>
                  <td>4.50%</td>
                  <td>$1,000</td>
                  <td>$1,000</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Money Market</td>
                  <td>3.75%</td>
                  <td>$2,500</td>
                  <td>$2,500</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>CD (12-month)</td>
                  <td>5.00%</td>
                  <td>$500</td>
                  <td>$500</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Youth Savings</td>
                  <td>1.00%</td>
                  <td>$0</td>
                  <td>$10</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Goal Saver</td>
                  <td>0.75%</td>
                  <td>$0</td>
                  <td>$0</td>
                  <td>$0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center" style={{ marginTop: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
            *APY = Annual Percentage Yield. Rates are subject to change. Early withdrawal penalties may apply to CDs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Savings Account Benefits</h2>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon-box">💰</div>
              <div className="feature-content">
                <h4>Competitive Rates</h4>
                <p>Earn more with our industry-leading interest rates on all savings products. 
                Your money works harder for you.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">🔄</div>
              <div className="feature-content">
                <h4>Automatic Savings</h4>
                <p>Set up recurring transfers from checking to savings. Build your nest egg 
                effortlessly with scheduled deposits.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">🛡️</div>
              <div className="feature-content">
                <h4>FDIC Insured</h4>
                <p>Your deposits are protected up to $250,000 by the FDIC, giving you complete 
                peace of mind.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">📊</div>
              <div className="feature-content">
                <h4>Savings Tools</h4>
                <p>Track your progress with visual savings goals, spending insights, and 
                personalized recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="two-column-layout">
            <div className="column-content">
              <h2 className="section-heading">Tips for Growing Your Savings</h2>
              <p className="text-body">
                Building a healthy savings account takes time and discipline. Here are 
                some strategies to help you reach your financial goals faster.
              </p>
              <div className="requirements-box">
                <h3>Smart Savings Strategies:</h3>
                <ul>
                  <li>Pay yourself first - set up automatic transfers on payday</li>
                  <li>Start small and increase gradually as you can afford it</li>
                  <li>Use the 50/30/20 budgeting rule</li>
                  <li>Save windfalls like tax refunds and bonuses</li>
                  <li>Track your spending to find areas to cut back</li>
                  <li>Set specific, measurable savings goals</li>
                  <li>Review and adjust your savings plan quarterly</li>
                </ul>
              </div>
            </div>
            <div className="column-content">
              <div className="info-box">
                <h3>Why Save with Denvan?</h3>
                <ul className="check-list">
                  <li>No monthly maintenance fees</li>
                  <li>Competitive interest rates</li>
                  <li>Multiple savings options</li>
                  <li>Easy online access</li>
                  <li>Mobile banking app</li>
                  <li>24/7 customer support</li>
                  <li>Financial planning tools</li>
                  <li>Secure and FDIC insured</li>
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
            <h2 className="cta-title">Start Saving for Your Future Today</h2>
            <p className="cta-text">
              Open a savings account and start earning competitive interest on your money.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Open Savings Account
              </Link>
              <Link to="/checking" className="btn btn-outline btn-large">
                View Checking Accounts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Savings;
