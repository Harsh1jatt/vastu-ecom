import { motion } from 'framer-motion';
import {
  FiHome,
  FiCompass,
  FiLayers,
  FiSun,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi';

import SectionHeader from '../components/ui/SectionHeader';
import styles from './Services.module.css';
import ServicesCard from '../components/services/ServicesCard';
const services = [
  {
    icon: <FiHome />,
    title: 'Residential Vastu',
    desc: 'Complete home vastu analysis for harmony, health and prosperity.'
  },
  {
    icon: <FiCompass />,
    title: 'Commercial Vastu',
    desc: 'Office and business vastu consultation for growth and success.'
  },
  {
    icon: <FiLayers />,
    title: 'Energy Balancing',
    desc: 'Correct negative energies using authentic vastu remedies.'
  },
  {
    icon: <FiSun />,
    title: 'Personal Consultation',
    desc: 'One-to-one guidance based on your specific requirements.'
  }
];

const process = [
  'Requirement Discussion',
  'Property Analysis',
  'Vastu Assessment',
  'Remedy Recommendation',
  'Implementation Support'
];

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.eyebrow}>Our Expertise</span>
            <h1>Professional Vastu Consultation Services</h1>
            <p>
              Transform your home, office and personal space with
              expert vastu guidance and authentic remedies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
<section className={styles.services}>
  <div className={styles.container}>
    <SectionHeader
      eyebrow="Consultation Packages"
      title="Our Professional Services"
      subtitle="Vastu, Numerology and Astrology consultations tailored to your needs."
    />

    <ServicesCard />
  </div>
</section>

      {/* Why Choose Us */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div>
              <span className={styles.eyebrow}>Why Us</span>

              <h2>Trusted Guidance Backed By Experience</h2>

              <ul className={styles.list}>
                <li><FiCheckCircle /> Certified Vastu Experts</li>
                <li><FiCheckCircle /> Personalized Solutions</li>
                <li><FiCheckCircle /> Authentic Remedies</li>
                <li><FiCheckCircle /> Ongoing Support</li>
              </ul>
            </div>

            <div className={styles.glassCard}>
              <h3>5000+</h3>
              <p>Spaces Successfully Guided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
            subtitle="A simple step-by-step consultation journey."
          />

          <div className={styles.timeline}>
            {process.map((step, index) => (
              <div key={step} className={styles.step}>
                <span>{index + 1}</span>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Ready To Transform Your Space?</h2>

          <p>
            Get expert vastu guidance and personalized recommendations.
          </p>

          <button>
            Book Consultation
            <FiArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Services;