import { useParams } from 'react-router-dom';
import { FiCheckCircle, FiPhoneCall } from 'react-icons/fi';
import servicesData from '../data/services/services.json';
import styles from './ServiceDetails.module.css';

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = servicesData.find(
    item => item.slug === slug
  );

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Consultation Service
          </span>

          <h1>
            {service.icon} {service.title}
          </h1>

          <p>
            {service.description}
          </p>

          <div className={styles.price}>
            Starting From {service.startingPrice}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className={styles.section}>
        <h2>About This Consultation</h2>

        <p>
          {service.description}
        </p>

        <p>
          Our consultation helps identify energy
          imbalances and provides practical
          recommendations based on Vastu,
          Astrology or Numerology principles.
        </p>
      </section>

      {/* PACKAGES */}

      <section className={styles.section}>
        <h2>Available Packages</h2>

        <div className={styles.packageGrid}>
          {service.packages.map(pkg => (
            <div
              key={pkg.name}
              className={styles.packageCard}
            >
              <h3>{pkg.name}</h3>

              <div className={styles.packagePrice}>
                {pkg.price}
              </div>

              <ul>
                <li>
                  <FiCheckCircle />
                  Expert Guidance
                </li>

                <li>
                  <FiCheckCircle />
                  Personalized Analysis
                </li>

                <li>
                  <FiCheckCircle />
                  Practical Remedies
                </li>

                <li>
                  <FiCheckCircle />
                  Follow-Up Support
                </li>
              </ul>

              <button>
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}

      <section className={styles.section}>
        <h2>Benefits</h2>

        <div className={styles.benefits}>
          <div>✔ Improved Prosperity</div>
          <div>✔ Positive Energy Flow</div>
          <div>✔ Better Decision Making</div>
          <div>✔ Growth & Success</div>
          <div>✔ Reduced Obstacles</div>
          <div>✔ Personalized Guidance</div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <h2>Ready To Transform Your Space?</h2>

        <p>
          Schedule your consultation today and
          receive expert guidance.
        </p>

        <button>
          <FiPhoneCall />
          Book Now
        </button>
      </section>
    </div>
  );
};

export default ServiceDetails;