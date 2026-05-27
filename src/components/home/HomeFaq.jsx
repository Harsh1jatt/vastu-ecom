import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import styles from './HomeFaq.module.css';

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Add products to your cart and click "Proceed to Order on WhatsApp". We confirm availability and guide you through secure payment options.',
  },
  {
    q: 'Are your products authentic?',
    a: 'Every crystal, rudraksha and vastu item is sourced from certified suppliers, lab-tested where applicable, and energy-cleansed before dispatch.',
  },
  {
    q: 'Do you ship across India?',
    a: 'Yes. Free shipping on orders above ₹500. Standard delivery takes 5–7 business days with tracking provided.',
  },
  {
    q: 'Can I return a product?',
    a: 'Unopened items in original condition can be returned within 30 days. See our shipping policy for full details.',
  },
];

const HomeFaq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="FAQ"
          title="Questions & Answers"
          subtitle="Everything you need to know about ordering sacred products from us."
        />
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <button
                type="button"
                className={styles.question}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {faq.q}
                <FiChevronDown className={open === i ? styles.rotated : ''} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrap}
                  >
                    <p className={styles.answer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <Link to="/faq" className={styles.link}>
          View all FAQs →
        </Link>
      </div>
    </section>
  );
};

export default HomeFaq;
