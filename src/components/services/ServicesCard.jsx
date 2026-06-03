import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import styles from './ServicesCard.module.css';

const servicesData = [
  {
    category: 'Office Vastu Consultation',
    packages: [
      { name: 'Basic', price: '₹11,000' },
      { name: 'Advanced', price: '₹21,000' },
      { name: 'Premium', price: '₹31,000' },
    ]
  },

  {
    category: 'Factory / Commercial Vastu',
    packages: [
      { name: 'Advanced', price: '₹21,000' },
      { name: 'Premium', price: '₹51,000' },
    ]
  },

  {
    category: 'Numerology Consultation',
    packages: [
      { name: 'Consultation', price: '₹2,100' }
    ]
  },

  {
    category: 'Astrology Consultation',
    packages: [
      { name: 'Consultation', price: '₹2,100' }
    ]
  },

  {
    category: 'Special Numerology Services',
    packages: [
      { name: 'Mobile Number', price: '₹5,100' },
      { name: 'Lucky Car Number', price: '₹1,100' },
      { name: 'Lucky Bank Account', price: '₹1,100' },
      { name: 'Lucky House Number', price: '₹1,100' },
      { name: 'Signature Analysis', price: '₹5,100' },
      { name: 'Name Numerology', price: '₹5,100' },
      { name: 'Business Numerology', price: '₹11,000' },
    ]
  }
];

const ServicesCard = () => {
  return (
    <div className={styles.wrapper}>
      {servicesData.map((service, index) => (
        <motion.div
          key={service.category}
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <div className={styles.top}>
            <span className={styles.badge}>Consultation</span>
            <h3>{service.category}</h3>
          </div>

          <div className={styles.packages}>
            {service.packages.map((pkg) => (
              <div key={pkg.name} className={styles.packageRow}>
                <div>
                  <FiCheck />
                  <span>{pkg.name}</span>
                </div>

                <strong>{pkg.price}</strong>
              </div>
            ))}
          </div>

          <button className={styles.btn}>
            Book Now
            <FiArrowRight />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCard;