import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiArrowRight,
  FiPhoneCall
} from 'react-icons/fi';

import SectionHeader from '../components/ui/SectionHeader';
import ServicesCard from '../components/services/ServicesCard';

import styles from './Services.module.css';

const PROCESS = [
  {
    step: '01',
    title: 'Consultation Booking',
    desc: 'Choose your preferred consultation package.'
  },
  {
    step: '02',
    title: 'Space Analysis',
    desc: 'Detailed review of your environment and requirements.'
  },
  {
    step: '03',
    title: 'Report & Remedies',
    desc: 'Receive practical personalized recommendations.'
  },
  {
    step: '04',
    title: 'Follow-up Support',
    desc: 'Continued guidance for implementation.'
  }
];

export default function Services() {
  return (
    <div className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.container}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className={styles.heroContent}
          >
            <span className={styles.eyebrow}>
              Consultation Services
            </span>

            <h1>
              Professional Vastu
              <br />
              Consultation Services
            </h1>

            <p>
              Discover harmony, prosperity and balanced energy
              through expert Vastu, Numerology and Astrology guidance.
            </p>

            <a
              href="https://wa.me/919115175769"
              className={styles.heroBtn}
            >
              Book Consultation
              <FiArrowRight />
            </a>

          </motion.div>

        </div>

        <div className={styles.heroGlow}/>
      </section>


      {/* SERVICES */}

      <section className={styles.services}>

        <div className={styles.container}>

          <SectionHeader
            eyebrow="Our Services"
            title="Choose Your Consultation"
            subtitle="Tailored solutions designed around your needs."
          />

          <ServicesCard />

        </div>

      </section>


      {/* WHY US */}

      <section className={styles.whyUs}>

        <div className={styles.container}>

          <div className={styles.whyGrid}>

            <div>

              <span className={styles.sectionLabel}>
                Why Choose Us
              </span>

              <h2>
                Ancient Wisdom
                <br />
                Modern Guidance
              </h2>

              <ul className={styles.list}>
                <li><FiCheckCircle/> 15+ Years Experience</li>
                <li><FiCheckCircle/> 5000+ Consultations</li>
                <li><FiCheckCircle/> Personalized Reports</li>
                <li><FiCheckCircle/> Ongoing Support</li>
              </ul>

            </div>

            <div className={styles.statsCard}>
              <span>5000+</span>
              <p>Happy Clients Guided</p>
            </div>

          </div>

        </div>

      </section>


      {/* PROCESS */}

      <section className={styles.process}>

        <div className={styles.container}>

          <SectionHeader
            eyebrow="Process"
            title="How It Works"
            subtitle="Simple consultation journey."
          />

          <div className={styles.steps}>

            {PROCESS.map((item)=>(

              <div
                key={item.step}
                className={styles.step}
              >

                <div className={styles.stepNumber}>
                  {item.step}
                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className={styles.cta}>

        <div className={styles.ctaBox}>

          <h2>
            Ready To Transform
            Your Space?
          </h2>

          <p>
            Get personalized guidance today.
          </p>

          <a
            href="https://wa.me/919115175769"
            className={styles.ctaBtn}
          >
            <FiPhoneCall/>
            Book Consultation
          </a>

        </div>

      </section>

    </div>
  );
}