import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const Investments = () => {
  return (
    <div className="info-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Investment Services</h1>
            <p className="page-subtitle">Build wealth for your future with professional investment guidance</p>
          </div>
        </div>
      </section>
      <section className="content-section bg-light">
        <div className="container">
          <div className="product-grid">
            <div className="product-card">
              <div className="product-header"><div className="product-icon">📈</div><h3 className="product-name">Retirement Planning</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>IRAs (Traditional & Roth)</li><li>401(k) rollovers</li><li>SEP & SIMPLE IRAs</li><li>Retirement calculators</li><li>Free consultations</li><li>Tax-advantaged growth</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Get Started</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">💼</div><h3 className="product-name">Brokerage Services</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Stocks & bonds</li><li>Mutual funds</li><li>ETFs</li><li>Options trading</li><li>Research tools</li><li>Low commissions</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Open Account</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">🎯</div><h3 className="product-name">Financial Planning</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Personalized strategies</li><li>Goal-based planning</li><li>Risk assessment</li><li>Portfolio management</li><li>Estate planning</li><li>Ongoing support</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Schedule Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Start Investing in Your Future</h2>
            <p className="cta-text">Work with experienced financial advisors</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Investments;
