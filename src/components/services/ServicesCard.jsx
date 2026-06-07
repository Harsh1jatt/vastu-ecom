import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styles from './ServicesCard.module.css';
import servicesData from '../../data/services/services.json';
import { Link } from 'react-router-dom';


const ServicesCard = () => {
  return (
    <div className={styles.wrapper}>
      {servicesData.map((service, index) => (
        <motion.div 
          key={service.slug}
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
        >
          <div className={styles.glow}></div>

          <span className={styles.badge}>
            Consultation
          </span>

          <div className={styles.icon}>
            {service.icon}
          </div>

          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <div className={styles.priceBox}>
            <span>Starting From</span>
            <strong>{service.startingPrice}</strong>
          </div>

          <Link
  to={`/services/${service.slug}`}
  className={styles.btn}
>
  View Details
  <FiArrowRight />
</Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCard;