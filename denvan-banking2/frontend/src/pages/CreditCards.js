import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const CreditCards = () => {
  return (
    <div className="info-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Credit Cards</h1>
            <p className="page-subtitle">
              Find the perfect credit card for your lifestyle. Enjoy rewards, low rates, 
              and exceptional benefits with Denvan Banking credit cards.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Our Credit Card Options</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">💳</div>
                <h3 className="product-name">Cashback Rewards</h3>
                <p className="product-tagline">Earn cash on every purchase</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>2% cash back on groceries & gas</li>
                  <li>1% cash back on all other purchases</li>
                  <li>No annual fee</li>
                  <li>0% intro APR for 12 months</li>
                  <li>$200 welcome bonus</li>
                  <li>Free credit score monitoring</li>
                </ul>
                <div className="product-rate">
                  <strong>15.99%</strong> - 24.99% variable APR
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">✈️</div>
                <h3 className="product-name">Travel Rewards</h3>
                <p className="product-tagline">See the world on points</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>3X points on travel & dining</li>
                  <li>1X points on all other purchases</li>
                  <li>50,000 bonus points after $3K spend</li>
                  <li>No foreign transaction fees</li>
                  <li>Travel insurance included</li>
                  <li>Airport lounge access</li>
                </ul>
                <div className="product-rate">
                  $95 annual fee
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🌟</div>
                <h3 className="product-name">Platinum Card</h3>
                <p className="product-tagline">Premium benefits & prestige</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>Unlimited 1.5% cash back</li>
                  <li>No spending caps or limits</li>
                  <li>Premium concierge service</li>
                  <li>Extended warranty protection</li>
                  <li>Purchase protection</li>
                  <li>24/7 dedicated support</li>
                </ul>
                <div className="product-rate">
                  <strong>12.99%</strong> - 21.99% variable APR
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🎓</div>
                <h3 className="product-name">Student Card</h3>
                <p className="product-tagline">Build credit while in school</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>No annual fee</li>
                  <li>1% cash back on purchases</li>
                  <li>Credit education resources</li>
                  <li>Flexible payment options</li>
                  <li>Good grades rewards</li>
                  <li>Automatic account review for limit increase</li>
                </ul>
                <div className="product-rate">
                  <strong>17.99%</strong> - 25.99% variable APR
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🛡️</div>
                <h3 className="product-name">Secured Card</h3>
                <p className="product-tagline">Build or rebuild credit</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>No credit check required</li>
                  <li>Refundable security deposit</li>
                  <li>Reports to all 3 credit bureaus</li>
                  <li>Upgrade path to unsecured card</li>
                  <li>Credit line increase reviews</li>
                  <li>Free financial counseling</li>
                </ul>
                <div className="product-rate">
                  $200 minimum deposit
                </div>
                <Link to="/register" className="btn btn-primary product-action">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🏢</div>
                <h3 className="product-name">Business Card</h3>
                <p className="product-tagline">For your business needs</p>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  <li>2% cash back on office supplies</li>
                  <li>Employee cards at no charge</li>
                  <li>Expense management tools</li>
                  <li>Higher credit limits available</li>
                  <li>Business purchase protection</li>
                  <li>Itemized year-end statements</li>
                </ul>
                <div className="product-rate">
                  No annual fee
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
          <h2 className="section-heading text-center">Credit Card Benefits</h2>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon-box">🔒</div>
              <div className="feature-content">
                <h4>Fraud Protection</h4>
                <p>$0 liability on unauthorized purchases. Advanced fraud monitoring and instant alerts keep your account secure.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">📱</div>
              <div className="feature-content">
                <h4>Mobile Wallet Ready</h4>
                <p>Add your card to Apple Pay, Google Pay, or Samsung Pay for secure contactless payments anywhere.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">💎</div>
              <div className="feature-content">
                <h4>Rewards Never Expire</h4>
                <p>Earn rewards that never expire and can be redeemed for cash back, travel, gift cards, or statement credits.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">📊</div>
              <div className="feature-content">
                <h4>Credit Score Access</h4>
                <p>Monitor your credit score for free and get personalized tips to improve your credit health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section bg-light">
        <div className="container">
          <div className="two-column-layout">
            <div className="column-content">
              <h2 className="section-heading">How to Apply</h2>
              <p className="text-body">
                Applying for a Denvan Banking credit card is quick and easy. You'll get 
                an instant decision in most cases.
              </p>
              <div className="requirements-box">
                <h3>Application Requirements:</h3>
                <ul>
                  <li>Must be at least 18 years old</li>
                  <li>Valid government-issued ID</li>
                  <li>Social Security Number</li>
                  <li>Proof of income</li>
                  <li>Current address</li>
                  <li>Good to excellent credit (varies by card)</li>
                </ul>
              </div>
            </div>
            <div className="column-content">
              <div className="info-box">
                <h3>Why Choose Our Cards?</h3>
                <ul className="check-list">
                  <li>Competitive APRs</li>
                  <li>No hidden fees</li>
                  <li>Generous rewards programs</li>
                  <li>Flexible payment options</li>
                  <li>24/7 customer support</li>
                  <li>Easy account management</li>
                  <li>Instant card lock feature</li>
                  <li>Purchase & travel protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Find Your Perfect Credit Card</h2>
            <p className="cta-text">
              Compare our cards and apply for the one that fits your lifestyle best.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Apply for a Card
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditCards;
