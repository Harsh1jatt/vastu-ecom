import { motion } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { SOCIAL } from '../../config/site';
import styles from './InstagramGallery.module.css';

const images = [
  'https://picsum.photos/seed/vastu1/500/500',
  'https://picsum.photos/seed/crystal2/500/500',
  'https://picsum.photos/seed/rudraksha3/500/500',
  'https://picsum.photos/seed/bracelet4/500/500',
  'https://picsum.photos/seed/wellness5/500/500',
  'https://picsum.photos/seed/spiritual6/500/500',
];

const InstagramGallery = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <SectionHeader
        eyebrow="Community"
        title="Follow Our Journey"
        subtitle={`${SOCIAL.instagramHandle} — daily inspiration, rituals & sacred living.`}
        light
      />
      <div className={styles.grid}>
        {images.map((src, i) => (
          <motion.a
            key={src}
            href={SOCIAL.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
            <span className={styles.overlay}>
              <FiInstagram size={28} />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default InstagramGallery;
