import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const Loans = () => {
  return (
    <div className="info-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Loans & Financing</h1>
            <p className="page-subtitle">
              Whether you're buying a home, car, or need personal financing, 
              we have competitive rates and flexible terms to meet your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Our Loan Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🏠</div>
                <h3 className="product-name">Home Loans</h3>
                <p className="product-tagline">Finance your dream home</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Purchase & refinance options</li>
                  <li>Fixed & adjustable rates</li>
                  <li>FHA, VA, & conventional loans</li>
                  <li>Down payment as low as 3%</li>
                  <li>First-time homebuyer programs</li>
                  <li>Free pre-qualification</li>
                </ul>
                <div className="product-rate">
                  Starting at <strong>6.25%</strong> APR
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Get Pre-Qualified
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🚗</div>
                <h3 className="product-name">Auto Loans</h3>
                <p className="product-tagline">Drive away with confidence</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>New & used vehicle financing</li>
                  <li>Refinancing available</li>
                  <li>No application fee</li>
                  <li>Same-day approval</li>
                  <li>Up to 84-month terms</li>
                  <li>GAP insurance available</li>
                </ul>
                <div className="product-rate">
                  Starting at <strong>4.99%</strong> APR
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">💰</div>
                <h3 className="product-name">Personal Loans</h3>
                <p className="product-tagline">Borrow for any purpose</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Unsecured loans up to $50K</li>
                  <li>No collateral required</li>
                  <li>Fixed monthly payments</li>
                  <li>Quick approval process</li>
                  <li>Flexible repayment terms</li>
                  <li>Debt consolidation options</li>
                </ul>
                <div className="product-rate">
                  Starting at <strong>7.99%</strong> APR
                </div>
                <Link to="/personal-loans" className="btn btn-primary product-action">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🎓</div>
                <h3 className="product-name">Student Loans</h3>
                <p className="product-tagline">Invest in your education</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Undergraduate & graduate loans</li>
                  <li>Cover up to 100% of costs</li>
                  <li>No application or origination fees</li>
                  <li>Flexible repayment options</li>
                  <li>Deferment while in school</li>
                  <li>Interest rate discounts available</li>
                </ul>
                <div className="product-rate">
                  Starting at <strong>5.49%</strong> APR
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🏡</div>
                <h3 className="product-name">Home Equity Loans</h3>
                <p className="product-tagline">Tap into your equity</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Fixed-rate loans</li>
                  <li>Lines of credit available</li>
                  <li>Borrow up to 85% LTV</li>
                  <li>Tax-deductible interest*</li>
                  <li>Use for any purpose</li>
                  <li>No closing costs on select loans</li>
                </ul>
                <div className="product-rate">
                  Starting at <strong>7.49%</strong> APR
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🏢</div>
                <h3 className="product-name">Business Loans</h3>
                <p className="product-tagline">Grow your business</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>SBA & conventional loans</li>
                  <li>Equipment financing</li>
                  <li>Commercial real estate</li>
                  <li>Working capital loans</li>
                  <li>Business lines of credit</li>
                  <li>Dedicated business support</li>
                </ul>
                <div className="product-rate">
                  Competitive rates
                </div>
                <Link to="/business" className="btn btn-primary product-action">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section bg-white">
        <div className="container">
          <h2 className="section-heading text-center">Why Choose Denvan for Your Loan?</h2>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon-box">📉</div>
              <div className="feature-content">
                <h4>Competitive Rates</h4>
                <p>Get some of the lowest rates in the industry with our member-focused pricing and flexible terms.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">⚡</div>
              <div className="feature-content">
                <h4>Fast Approval</h4>
                <p>Quick application process with same-day approval on most loans. Get your money when you need it.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">🤝</div>
              <div className="feature-content">
                <h4>Personal Service</h4>
                <p>Work with dedicated loan specialists who guide you through every step of the process.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">💡</div>
              <div className="feature-content">
                <h4>Flexible Options</h4>
                <p>Choose from various loan terms and payment options to find what works best for your budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Apply for a Loan?</h2>
            <p className="cta-text">
              Get started today and take the next step toward achieving your financial goals.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Apply for a Loan
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Contact a Loan Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
