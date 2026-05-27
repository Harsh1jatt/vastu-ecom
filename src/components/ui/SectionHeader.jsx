import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => (
  <motion.header
    className={`${styles.header} ${styles[align]} ${light ? styles.light : ''}`}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    <div className={styles.line} />
  </motion.header>
);

export default SectionHeader;
