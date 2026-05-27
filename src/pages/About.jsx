import React from 'react';
import styles from './About.module.css';

const About = () => (
  <div className={styles.about}>
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>About Vaastu Sanctuary</h1>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <section>
          <h2>Our Story</h2>
          <p>Vaastu Sanctuary was founded with a mission to bring authentic spiritual and wellness products to your doorstep. We believe in the transformative power of nature's gifts and ancient wisdom.</p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>To provide premium quality spiritual products that enhance wellness, promote spiritual growth, and bring positive energy into people's lives.</p>
        </section>

        <section>
          <h2>Why Choose Us</h2>
          <ul>
            <li>✓ Authentic & Genuine Products</li>
            <li>✓ Trusted Suppliers</li>
            <li>✓ Premium Quality Assurance</li>
            <li>✓ Expert Curation</li>
            <li>✓ Fast & Safe Shipping</li>
            <li>✓ Customer Support</li>
          </ul>
        </section>

        <section>
          <h2>Our Collections</h2>
          <p>From powerful crystals and sacred rudraksha to vastu products and wellness items, we offer everything for your spiritual journey.</p>
        </section>
      </div>
    </div>
  </div>
);

export default About;
