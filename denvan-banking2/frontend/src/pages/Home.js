import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Banking Made <span className="highlight">Simple</span>
            </h1>
            <p className="hero-subtitle">
              Experience the future of digital banking with Denvan. 
              Secure, fast, and designed for your financial success.
            </p>
            <div className="hero-buttons">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <button className="btn btn-primary btn-large">Go to Dashboard</button>
                </Link>
              ) : (
                <>
                  <Link to="/register">
                    <button className="btn btn-primary btn-large">Get Started</button>
                  </Link>
                  <Link to="/login">
                    <button className="btn btn-outline btn-large">Login</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Denvan?</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure</h3>
              <p className="feature-description">
                Bank-level security with end-to-end encryption to keep your money safe.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Fast Transfers</h3>
              <p className="feature-description">
                Send money instantly to anyone, anywhere, anytime.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Smart Insights</h3>
              <p className="feature-description">
                Track your spending and get insights to manage your finances better.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">No Hidden Fees</h3>
              <p className="feature-description">
                Transparent pricing with no surprise charges or hidden fees.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">24/7 Access</h3>
              <p className="feature-description">
                Bank anytime, anywhere with our always-available platform.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Easy to Use</h3>
              <p className="feature-description">
                Intuitive interface designed for everyone, from beginners to experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Join thousands of satisfied customers who trust Denvan for their banking needs.
          </p>
          {!isAuthenticated && (
            <Link to="/register">
              <button className="btn btn-primary btn-large">Create Your Account</button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
