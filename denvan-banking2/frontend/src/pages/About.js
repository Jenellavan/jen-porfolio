import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const About = () => {
  return (
    <div className="info-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">About Denvan Banking</h1>
            <p className="page-subtitle">
              Your trusted financial partner since 2024. We're committed to providing 
              exceptional banking services with a personal touch.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-heading">Our Mission</h2>
            <p className="section-intro">
              Empowering individuals and businesses to achieve their financial goals
            </p>
          </div>
          <div className="grid grid-3">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Customer First</h3>
              <p>We put our members at the heart of everything we do, ensuring personalized service and support.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Security</h3>
              <p>Your financial security is our top priority with industry-leading encryption and protection.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Leveraging cutting-edge technology to provide seamless banking experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="content-section bg-light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$2B+</div>
              <div className="stat-label">Assets Under Management</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="two-column-layout">
            <div className="column-content">
              <h2 className="section-heading">Our Story</h2>
              <p className="text-body">
                Founded in 2024, Denvan Banking was created with a simple mission: to provide 
                accessible, secure, and innovative banking services to everyone.
              </p>
              <p className="text-body">
                What started as a vision to revolutionize digital banking has grown into a 
                thriving financial institution serving thousands of members nationwide.
              </p>
              <p className="text-body">
                We believe banking should be simple, transparent, and accessible. That's why 
                we've built our platform from the ground up with user experience in mind.
              </p>
            </div>
            <div className="column-content">
              <div className="info-box">
                <h3>Why Choose Denvan?</h3>
                <ul className="check-list">
                  <li>No monthly maintenance fees</li>
                  <li>Competitive interest rates</li>
                  <li>Mobile-first banking experience</li>
                  <li>Award-winning customer service</li>
                  <li>FDIC insured up to $250,000</li>
                  <li>Free financial planning tools</li>
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
            <h2 className="cta-title">Ready to Join Denvan Banking?</h2>
            <p className="cta-text">
              Open your account today and experience banking that puts you first.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Become a Member
              </Link>
              <Link to="/membership" className="btn btn-outline btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
