import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const Services = () => {
  return (
    <div className="info-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Banking Services</h1>
            <p className="page-subtitle">Complete financial services to meet all your needs</p>
          </div>
        </div>
      </section>
      <section className="content-section bg-light">
        <div className="container">
          <div className="product-grid">
            <div className="product-card">
              <div className="product-header"><div className="product-icon">📱</div><h3 className="product-name">Mobile Banking</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Mobile check deposit</li><li>Bill pay</li><li>Account alerts</li><li>Transfer funds</li><li>Find ATMs</li><li>Card controls</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Get Started</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">💳</div><h3 className="product-name">Debit Cards</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Instant issue available</li><li>EMV chip security</li><li>Zero liability protection</li><li>Contactless payments</li><li>Customizable designs</li><li>Travel notifications</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Order Card</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">🔒</div><h3 className="product-name">Safe Deposit Boxes</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Multiple sizes available</li><li>24/7 access at select branches</li><li>Secure storage</li><li>Affordable annual fees</li><li>Insurance options</li><li>Privacy guaranteed</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Reserve a Box</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">💵</div><h3 className="product-name">Wire Transfers</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Domestic & international</li><li>Same-day processing</li><li>Secure transactions</li><li>Competitive fees</li><li>Track your transfer</li><li>Multiple currencies</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Send Money</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">📝</div><h3 className="product-name">Notary Services</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Free for members</li><li>No appointment needed</li><li>Available at all branches</li><li>Most documents accepted</li><li>Professional service</li><li>Quick processing</li>
                </ul>
                <Link to="/about" className="btn btn-primary product-action">Find a Branch</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header"><div className="product-icon">🌍</div><h3 className="product-name">Foreign Currency</h3></div>
              <div className="product-body">
                <ul className="product-features">
                  <li>60+ currencies available</li><li>Competitive exchange rates</li><li>No fees for members</li><li>Order online or in-branch</li><li>Home delivery available</li><li>Buyback guarantee</li>
                </ul>
                <Link to="/register" className="btn btn-primary product-action">Order Currency</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Experience Full-Service Banking</h2>
            <p className="cta-text">Join Denvan and access all our services</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">Become a Member</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
