import { useParams } from 'react-router-dom';
import { FiPhoneCall, FiCheck, FiArrowRight } from 'react-icons/fi';
import servicesData from '../data/services/services.json';
import styles from './ServiceDetails.module.css';
import SEO from '../components/common/SEO';
import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  WHATSAPP_NUMBER
} from '../config/site';
const BENEFITS = [
  { icon: '🌟', label: 'Improved Prosperity' },
  { icon: '🌊', label: 'Positive Energy Flow' },
  { icon: '🧭', label: 'Better Decision Making' },
  { icon: '📈', label: 'Growth & Success' },
  { icon: '🔓', label: 'Reduced Obstacles' },
  { icon: '🎯', label: 'Personalized Guidance' },
];

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = servicesData.find(item => item.slug === slug);

  if (!service) {
    return (
      <div className={styles.notFound}>
        <span>🔍</span>
        <h2>Service Not Found</h2>
        <p>The consultation you're looking for doesn't exist.</p>
      </div>
    );
  }

const createWhatsappUrl = (packageName = '', packagePrice = '') => {
  const message = `
Hello ${SITE_NAME},

I would like to book a consultation.

Service: ${service.title}
Package: ${packageName}
Price: ${packagePrice}

Please share further details.

Thank you.
`;

  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
};
  return (
    <div className={styles.page}>
  <SEO
    title={service.title}
    description={service.description}
    keywords={`${service.title}, vastu consultation, vastu expert, astrology consultation`}
    image={service.image}
    url={`/services/${service.slug}`}
  />
  <Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "ProfessionalService",
        name: "Vaastu Divine"
      },
      areaServed: "India",
      url: `${SITE_URL}/services/${service.slug}`
    })}
  </script>
</Helmet>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className={`${styles.hero} ${service.image ? styles.heroWithImage : ''}`}
        style={service.image ? { backgroundImage: `url(${service.image})` } : {}}
      >
        <div className={styles.heroLeft}>
          <span className={styles.eyebrow}>Consultation Service</span>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroDesc}>{service.description}</p>
          <div className={styles.heroPriceLine}>
            <span className={styles.heroFrom}>Starting from</span>
            <span className={styles.heroPrice}>{service.startingPrice}</span>
          </div>
          <a href={createWhatsappUrl(service.title, service.startingPrice)} target="_blank" rel="noreferrer" className={styles.heroCta}>
            Book Consultation <FiArrowRight />
          </a>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.iconOrb}>
            <span className={styles.heroIcon}>{service.icon}</span>
          </div>
          <div className={styles.orbRing1} />
          <div className={styles.orbRing2} />
        </div>

        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAF7F2" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>About This Consultation</div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>What We Offer</h2>
              <p>{service.description}</p>
              <p>
                Our expert consultation identifies energy imbalances and provides
                practical, personalized recommendations grounded in the ancient wisdom
                of Vastu Shastra, Astrology, and Numerology — tailored precisely to
                your space and life circumstances.
              </p>
            </div>
            <div className={styles.aboutAccent}>
              <div className={styles.accentCard}>
                <div className={styles.accentIcon}>{service.icon}</div>
                <div className={styles.accentStat}>
                  <span className={styles.statNum}>15+</span>
                  <span className={styles.statLabel}>Years of Experience</span>
                </div>
                <div className={styles.accentDivider} />
                <div className={styles.accentStat}>
                  <span className={styles.statNum}>5,000+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.accentDivider} />
                <div className={styles.accentStat}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statLabel}>Personalized Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────── */}
      <section className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Investment</div>
          <h2 className={styles.sectionTitle + ' ' + styles.centered}>
            Choose Your Package
          </h2>
          <p className={styles.sectionSub}>
            Every package includes expert guidance, personalized analysis, practical remedies, and follow-up support.
          </p>

          <div className={styles.packageGrid}>
            {service.packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`${styles.packageCard} ${idx === Math.floor(service.packages.length / 2) ? styles.featured : ''}`}
              >
                {idx === Math.floor(service.packages.length / 2) && service.packages.length > 1 && (
                  <div className={styles.featuredBadge}>Most Popular</div>
                )}
                <div className={styles.pkgTop}>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <div className={styles.pkgPrice}>{pkg.price}</div>
                </div>
                <ul className={styles.pkgFeatures}>
                  {['Expert Consultation', 'Energy Map Analysis', 'Practical Remedies', 'Written Report', 'Follow-Up Support'].map(f => (
                    <li key={f}>
                      <FiCheck className={styles.checkIcon} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
  href={createWhatsappUrl(pkg.name, pkg.price)}
  target="_blank"
  rel="noreferrer"
  className={styles.pkgBtn}
>
  Book This Package
</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Why Choose Us</div>
          <h2 className={styles.sectionTitle + ' ' + styles.centered}>
            Transformative Benefits
          </h2>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map(b => (
              <div key={b.label} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <span className={styles.benefitLabel}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Our Process</div>
          <h2 className={styles.sectionTitle + ' ' + styles.centered}>
            How It Works
          </h2>
          <div className={styles.processSteps}>
            {[
              { step: '01', title: 'Initial Booking', desc: 'Contact us via WhatsApp or phone to schedule your consultation.' },
              { step: '02', title: 'Site Analysis', desc: 'Our expert studies your space, plans, and personal details in depth.' },
              { step: '03', title: 'Report & Remedies', desc: 'Receive a detailed written report with specific, actionable remedies.' },
              { step: '04', title: 'Follow-Up', desc: 'We stay in touch to ensure positive changes are manifesting fully.' },
            ].map((s, i, arr) => (
              <div key={s.step} className={styles.processStep}>
                <div className={styles.stepNumWrap}>
                  <span className={styles.stepNum}>{s.step}</span>
                  {i < arr.length - 1 && <div className={styles.stepLine} />}
                </div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaIcon}>{service.icon}</span>
          <h2 className={styles.ctaTitle}>
            Ready to Transform Your {service.title.split(' ')[0]}?
          </h2>
          <p className={styles.ctaDesc}>
            Take the first step toward harmony, prosperity and positive energy.
            Our experts are ready to guide you.
          </p>
          <div className={styles.ctaBtns}>
            <a href={createWhatsappUrl(service.title, service.startingPrice)} target="_blank" rel="noreferrer" className={styles.ctaPrimary}>
              <FiPhoneCall /> Book Your Consultation
            </a>
            <a href="tel:+919115175769" className={styles.ctaSecondary}>
              Call +91 91151 75769
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetails;