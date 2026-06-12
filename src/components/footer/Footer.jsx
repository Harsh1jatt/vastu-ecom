import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { getCategories, getCategorySlug } from '../../utils/productUtils';
import styles from './Footer.module.css';
import {
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PERSONS,
  ADDRESS,
  SOCIAL
} from '../../config/site';
const Footer = () => {
  const categories = getCategories();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.content}>
          {/* About Section */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <span className={styles.logoText}>{SITE_NAME}</span>
            </div>
            <p className={styles.description}>
              Welcome to {SITE_NAME}, your trusted destination for authentic
              Vastu, spiritual, and energy-balancing products.
            </p>
            <div className={styles.social}>
              <a href={SOCIAL.facebookUrl || '#'} className={styles.socialLink} aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href={SOCIAL.instagramUrl || '#'} className={styles.socialLink} aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href={SOCIAL.twitterUrl || '#'} className={styles.socialLink} aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href={SOCIAL.linkedinUrl || '#'} className={styles.socialLink} aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className={styles.column}>
            <h4>Categories</h4>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <Link to={`/category/${getCategorySlug(category)}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className={styles.column}>
            <h4>Policies</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/return">Return Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <p>
              <strong>Email:</strong>
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>

            {CONTACT_PERSONS.map((person) => (
              <p key={person.phone}>
                <strong>{person.name}:</strong>
                <br />
                <a href={`tel:${person.phone.replace(/\s/g, '')}`}>
                  {person.phone}
                </a>
              </p>
            ))}

            <p>
              <strong>Address:</strong>
              <br />
              {ADDRESS.full}
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
          </div>
          <div className={styles.payments}>
            <span>We Accept:</span>
            <div className={styles.paymentMethods}>
              <span>💳 Credit/Debit</span>
              <span>📱 UPI</span>
              <span>🏦 Net Banking</span>
            </div>
          </div>
          <div className={styles.scrollTop}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
