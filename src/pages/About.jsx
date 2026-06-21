import React from 'react';
import styles from './About.module.css';
import {
  SITE_NAME
} from '../config/site';

const About = () => (
  <div className={styles.about}>
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>About {SITE_NAME}</h1>
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.content}>

        <section>
          <h2>Who We Are</h2>
          <p>
            {SITE_NAME} is a trusted Vastu consultation and energy solutions
            platform dedicated to helping individuals, families, and businesses
            create harmonious living and working environments. We combine the
            timeless principles of Vastu Shastra with practical energy-balancing
            solutions to support prosperity, health, peace, and overall well-being.
          </p>

          <p>
            Our goal is to identify energy imbalances within a space and provide
            effective remedies that help unlock positive opportunities while
            minimizing obstacles. Whether it is a home, office, shop, factory,
            or commercial property, our consultations are designed to bring
            greater balance and positive energy into every environment.
          </p>
        </section>

        <section>
          <h2>Our Vision</h2>
          <p>
            We envision a world where every space supports the success,
            happiness, and growth of the people who occupy it. Through authentic
            Vastu guidance and energy-enhancing solutions, we strive to make
            positive living accessible to everyone.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide reliable, practical, and result-oriented
            Vastu consultation services that help clients improve energy flow,
            strengthen prosperity, enhance relationships, and create a peaceful
            environment for personal and professional growth.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>✓ Residential Vastu Consultation</li>
            <li>✓ Commercial & Office Vastu Analysis</li>
            <li>✓ Industrial & Factory Vastu Guidance</li>
            <li>✓ Energy Balancing Solutions</li>
            <li>✓ Direction & Space Correction Remedies</li>
            <li>✓ Personalized Vastu Recommendations</li>
            <li>✓ Vastu Products & Energy Enhancers</li>
          </ul>
        </section>

        <section>
          <h2>Why Choose {SITE_NAME}</h2>
          <ul>
            <li>✓ Authentic Vastu Principles</li>
            <li>✓ Personalized Consultation Approach</li>
            <li>✓ Practical and Easy-to-Implement Remedies</li>
            <li>✓ Focus on Positive Energy Flow</li>
            <li>✓ Trusted Guidance for Homes & Businesses</li>
            <li>✓ Commitment to Client Satisfaction</li>
          </ul>
        </section>

        <section>
          <h2>Our Approach</h2>
          <p>
            Every property has a unique energy pattern. Our approach begins with
            understanding the layout, direction, and purpose of the space. We
            carefully analyze these factors and recommend suitable corrections
            and energy-enhancing solutions that align with Vastu principles.
          </p>

          <p>
            Rather than suggesting major structural changes, we focus on
            practical remedies and balanced solutions wherever possible, helping
            clients achieve positive results with minimal disruption.
          </p>
        </section>

        <section>
          <h2>Helping You Create Positive Spaces</h2>
          <p>
            At {SITE_NAME}, we believe that a balanced environment can positively
            influence every aspect of life. Our commitment is to help you create
            spaces that support success, health, harmony, and spiritual growth.
          </p>

          <p>
            Whether you are building a new property, purchasing a home, starting
            a business, or seeking solutions for existing challenges, we are
            here to guide you toward a more balanced and prosperous future.
          </p>
        </section>

      </div>
    </div>
  </div>
);

export default About;