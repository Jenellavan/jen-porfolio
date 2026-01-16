import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const HelpCenter = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      category: "Account Access",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page. Enter your email address and we'll send you a secure link to reset your password. The link expires in 24 hours for security."
        },
        {
          q: "What should I do if I'm locked out of my account?",
          a: "After 3 unsuccessful login attempts, your account will be temporarily locked for security. Wait 15 minutes and try again, or call us at 1-888-DENVAN-1 (1-888-336-8261) for immediate assistance."
        },
        {
          q: "How do I enable two-factor authentication?",
          a: "Log in to your account, go to Profile > Security Settings > Two-Factor Authentication. Choose between SMS or authenticator app for enhanced security."
        }
      ]
    },
    {
      category: "Transfers & Payments",
      questions: [
        {
          q: "How long do transfers take?",
          a: "Transfers between Denvan accounts are instant. External transfers typically take 1-3 business days. Same-day transfers are available for a small fee."
        },
        {
          q: "What are the transfer limits?",
          a: "Daily transfer limits vary by account type: Standard accounts have a $5,000 daily limit, Premium accounts have $25,000. You can request higher limits by contacting us."
        },
        {
          q: "Are there fees for transfers?",
          a: "Transfers between Denvan accounts are free. External transfers are free for the first 3 per month, then $0.50 each. Wire transfers are $15 domestic, $25 international."
        }
      ]
    },
    {
      category: "Cards & Security",
      questions: [
        {
          q: "What should I do if my card is lost or stolen?",
          a: "Immediately lock your card in the mobile app or call us 24/7 at 1-888-336-8261. We'll cancel the card and rush a replacement to you within 3-5 business days."
        },
        {
          q: "How do I dispute a transaction?",
          a: "Log in to your account, go to Transactions, select the transaction, and click 'Dispute'. Or call us at 1-888-336-8261. Disputes are typically resolved within 10 business days."
        },
        {
          q: "Does Denvan offer fraud protection?",
          a: "Yes! We offer zero liability protection on unauthorized transactions. We monitor your account 24/7 and will alert you to suspicious activity immediately."
        }
      ]
    },
    {
      category: "Mobile & Online Banking",
      questions: [
        {
          q: "Is the mobile app available for both iOS and Android?",
          a: "Yes! Download the Denvan Banking app from the App Store or Google Play. It's free and includes mobile check deposit, bill pay, and account management."
        },
        {
          q: "How do I deposit a check using my phone?",
          a: "Open the app, tap 'Deposit Check', take photos of both sides of the check, enter the amount, and submit. Funds are typically available within one business day."
        },
        {
          q: "Can I pay bills through online banking?",
          a: "Yes! Set up bill pay in your online banking or mobile app. You can pay anyone, schedule recurring payments, and track payment history—all for free."
        }
      ]
    },
    {
      category: "Loans & Credit",
      questions: [
        {
          q: "How do I apply for a loan?",
          a: "Visit our Loans page, select the loan type, and click 'Apply Now'. You'll need government ID, proof of income, and employment information. Most decisions are made within 24 hours."
        },
        {
          q: "What credit score do I need?",
          a: "Requirements vary by product. Generally, 620+ for personal loans, 640+ for home loans, and 680+ for best rates. We also offer credit-building products for those establishing credit."
        },
        {
          q: "Can I make extra payments without penalty?",
          a: "Yes! All our loans have no prepayment penalties. You can make extra payments anytime to pay off your loan faster and save on interest."
        }
      ]
    },
    {
      category: "Fees & Rates",
      questions: [
        {
          q: "Does Denvan charge monthly fees?",
          a: "Most of our accounts have no monthly fees. Some premium accounts have fees that can be waived with minimum balance requirements. Check our fee schedule for details."
        },
        {
          q: "What are your overdraft fees?",
          a: "We charge $35 per overdraft, with a maximum of 3 per day. Link your savings account for free overdraft protection to avoid these fees."
        },
        {
          q: "How often do interest rates change?",
          a: "Savings rates are variable and may change monthly. Loan rates are locked when you apply. CD rates are fixed for the entire term."
        }
      ]
    }
  ];

  return (
    <div className="info-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="page-title">Help Center</h1>
            <p className="page-subtitle">
              Find answers to your questions and get the support you need
            </p>
            {/* Search Bar */}
            <div className="help-search">
              <input
                type="text"
                className="help-search-input"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="help-search-btn">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Popular Topics</h2>
          <div className="grid grid-3">
            <div className="value-card">
              <div className="value-icon">🔐</div>
              <h3>Account Security</h3>
              <p>Learn about protecting your account and fraud prevention</p>
              <Link to="#security" className="text-link">Learn More →</Link>
            </div>
            <div className="value-card">
              <div className="value-icon">💳</div>
              <h3>Card Services</h3>
              <p>Manage your debit and credit cards, report issues</p>
              <Link to="#cards" className="text-link">Learn More →</Link>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Transfers & Payments</h3>
              <p>Send money, pay bills, and manage transactions</p>
              <Link to="#transfers" className="text-link">Learn More →</Link>
            </div>
            <div className="value-card">
              <div className="value-icon">📱</div>
              <h3>Mobile Banking</h3>
              <p>Use our app for deposits, transfers, and more</p>
              <Link to="#mobile" className="text-link">Learn More →</Link>
            </div>
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3>Loan Applications</h3>
              <p>Apply for loans and understand the process</p>
              <Link to="/loans" className="text-link">Learn More →</Link>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Account Management</h3>
              <p>Update information, change settings, view statements</p>
              <Link to="#account" className="text-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="content-section bg-white">
        <div className="container">
          <h2 className="section-heading text-center">Frequently Asked Questions</h2>
          {faqs.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: '40px' }}>
              <h3 className="faq-category-title">{category.category}</h3>
              <div className="accordion">
                {category.questions.map((item, qIndex) => {
                  const index = `${catIndex}-${qIndex}`;
                  return (
                    <div
                      key={index}
                      className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                    >
                      <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h4 className="accordion-title">{item.q}</h4>
                        <span className="accordion-icon">▼</span>
                      </div>
                      <div className="accordion-content">
                        <div className="accordion-body">{item.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="section-heading text-center">Contact Us</h2>
          <div className="grid grid-2">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone Support</h3>
              <p className="contact-detail">1-888-DENVAN-1 (1-888-336-8261)</p>
              <p className="contact-hours">Available 24/7</p>
              <ul className="contact-list">
                <li>Account inquiries</li>
                <li>Technical support</li>
                <li>Report lost/stolen cards</li>
                <li>Fraud alerts</li>
              </ul>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p className="contact-detail">Chat with a representative</p>
              <p className="contact-hours">Mon-Fri: 8am-8pm EST</p>
              <button className="btn btn-primary" style={{ marginTop: '20px' }}>
                Start Chat
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Support</h3>
              <p className="contact-detail">support@denvanbanking.com</p>
              <p className="contact-hours">Response within 24 hours</p>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '20px' }}>
                Send Email
              </Link>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🏦</div>
              <h3>Visit a Branch</h3>
              <p className="contact-detail">Find a location near you</p>
              <p className="contact-hours">Mon-Fri: 9am-5pm, Sat: 9am-1pm</p>
              <Link to="/locations" className="btn btn-outline" style={{ marginTop: '20px' }}>
                Find Branches
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="content-section bg-white">
        <div className="container">
          <h2 className="section-heading text-center">Additional Resources</h2>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon-box">📄</div>
              <div className="feature-content">
                <h4>Forms & Documents</h4>
                <p>Download account applications, dispute forms, and other important documents.</p>
                <Link to="/forms" className="text-link">View Forms →</Link>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">📚</div>
              <div className="feature-content">
                <h4>Financial Education</h4>
                <p>Access guides, calculators, and tools to help you make informed financial decisions.</p>
                <Link to="/education" className="text-link">Learn More →</Link>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">🔒</div>
              <div className="feature-content">
                <h4>Security Center</h4>
                <p>Learn about online security best practices and how we protect your information.</p>
                <Link to="/security" className="text-link">Visit Security Center →</Link>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">💡</div>
              <div className="feature-content">
                <h4>Video Tutorials</h4>
                <p>Watch step-by-step guides on using online banking, mobile app, and other services.</p>
                <Link to="/tutorials" className="text-link">Watch Videos →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Still Need Help?</h2>
            <p className="cta-text">
              Our customer service team is here to assist you 24/7
            </p>
            <div className="cta-buttons">
              <a href="tel:1-888-336-8261" className="btn btn-primary btn-large">
                Call 1-888-336-8261
              </a>
              <button className="btn btn-outline btn-large">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
