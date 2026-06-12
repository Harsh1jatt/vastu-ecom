import React from 'react';
import styles from './StaticPages.module.css';

export const Blogs = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>Our Blog</h1>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Coming soon! Check back for articles about spirituality, wellness, and our products.</p>
      </div>
    </div>
  </div>
);

export const FAQ = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>Frequently Asked Questions</h1>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.faqItem}>
          <h3>How do I place an order?</h3>
          <p>You can place an order through our website using the shopping cart. We accept all major payment methods.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>What is your shipping policy?</h3>
          <p>We offer free shipping on orders above ₹500. Delivery typically takes 5-7 business days.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Can I return products?</h3>
          <p>Yes! We have a 30-day return policy for unopened products in original condition.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Are your products authentic?</h3>
          <p>All our products are sourced from trusted suppliers and are 100% authentic.</p>
        </div>
      </div>
    </div>
  </div>
);


export const Terms = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>Terms & Conditions</h1>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <p>By using our website and placing orders, you agree to our terms and conditions. All products are sold as-is and must be used as per manufacturer's instructions.</p>
      </div>
    </div>
  </div>
);

export const ShippingPolicy = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>Shipping Policy</h1>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.policySection}>
          <h3>Free Shipping</h3>
          <p>Orders above ₹500 qualify for free shipping across India.</p>
        </div>
        <div className={styles.policySection}>
          <h3>Delivery Time</h3>
          <p>Standard delivery takes 5-7 business days from order confirmation.</p>
        </div>
        <div className={styles.policySection}>
          <h3>Tracking</h3>
          <p>You'll receive tracking details via email once your order ships.</p>
        </div>
      </div>
    </div>
  </div>
);

export const NotFound = () => (
  <div className={styles.notFound}>
    <div className={styles.container}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" className={styles.backLink}>Go to Home</a>
      </div>
    </div>
  </div>
);
