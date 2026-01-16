import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const Membership = () => {
  return (
    <div className="info-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Become a Member</h1>
            <p className="page-subtitle">Join Denvan Banking and experience the difference of member-focused banking.</p>
          </div>
        </div>
      </section>

      <section className="content-section bg-white">
        <div className="container">
          <h2 className="section-heading text-center">Membership Benefits</h2>
          <div className="grid grid-3">
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Better Rates</h3>
              <p>Enjoy higher savings rates and lower loan rates than traditional banks</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎁</div>
              <h3>Fewer Fees</h3>
              <p>Most services have no or low fees because we're not-for-profit</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Personalized Service</h3>
              <p>Get individual attention from our dedicated team</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌐</div>
              <h3>Digital Banking</h3>
              <p>Access your accounts 24/7 through our mobile app and online banking</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Financial Education</h3>
              <p>Free financial planning tools and resources</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔐</div>
              <h3>Security</h3>
              <p>Your deposits are federally insured up to $250,000</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section bg-light">
        <div className="container">
          <div className="two-column-layout">
            <div className="column-content">
              <h2 className="section-heading">Who Can Join?</h2>
              <p className="text-body">Membership is open to everyone! Join Denvan Banking today and become part of our community.</p>
              <div className="requirements-box">
                <h3>Membership Requirements:</h3>
                <ul>
                  <li>Must be 18 years or older</li>
                  <li>Valid government-issued ID</li>
                  <li>Social Security Number</li>
                  <li>Verifiable address</li>
                  <li>$25 minimum deposit</li>
                </ul>
              </div>
            </div>
            <div className="column-content">
              <div className="info-box">
                <h3>Ready to Join?</h3>
                <p>Opening an account takes just minutes:</p>
                <ol style={{paddingLeft: '20px', marginTop: '20px'}}>
                  <li style={{marginBottom: '12px'}}>Complete the online application</li>
                  <li style={{marginBottom: '12px'}}>Verify your identity</li>
                  <li style={{marginBottom: '12px'}}>Fund your account</li>
                  <li style={{marginBottom: '12px'}}>Start banking!</li>
                </ol>
                <Link to="/register" className="btn btn-primary" style={{width: '100%', marginTop: '24px'}}>
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Join 50,000+ Members Today</h2>
            <p className="cta-text">Experience banking that puts you first.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">Become a Member</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
