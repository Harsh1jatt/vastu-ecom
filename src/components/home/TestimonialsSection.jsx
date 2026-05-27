import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'The 7 Chakra bracelet transformed my meditation practice. Authentic quality, beautiful packaging, and the energy is palpable.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    text: 'Vastu pyramid set brought remarkable positive shifts in our home. This is true luxury spiritual commerce.',
    rating: 5,
  },
  {
    name: 'Ananya Reddy',
    location: 'Bangalore',
    text: 'Genuine rudraksha and crystals. WhatsApp ordering was seamless. Vaastu Sanctuary sets the standard.',
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <SectionHeader
        eyebrow="Testimonials"
        title="Voices of Transformation"
        subtitle="Stories from souls who found balance, prosperity and peace through our collection."
      />
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            className={styles.card}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            <div className={styles.quoteMark}>&ldquo;</div>
            <div className={styles.stars}>
              {Array.from({ length: t.rating }).map((_, j) => (
                <FiStar key={j} fill="currentColor" />
              ))}
            </div>
            <p>{t.text}</p>
            <footer>
              <strong>{t.name}</strong>
              <span>{t.location}</span>
            </footer>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
