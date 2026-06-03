import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTruck, FiShield, FiHeart, FiStar, FiAward, FiCheck } from 'react-icons/fi';
import HeroSection from '../components/home/HeroSection';
import ProductSlider from '../components/home/ProductSlider';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InstagramGallery from '../components/home/InstagramGallery';
import HomeFaq from '../components/home/HomeFaq';
import ProductCard from '../components/products/ProductCard';
import SectionHeader from '../components/ui/SectionHeader';
import {
  getFeaturedProducts,
  getBestSellers,
  getCategories,
  getCategorySlug,
  getProductsByCategory,
} from '../utils/productUtils';
import styles from './Homepage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Homepage = () => {
  const featured = getFeaturedProducts();
  const bestSellers = getBestSellers();
const categories = getCategories();

const priorityCategories = [
  'Compass',
  'Tapes',
  'Strips',
  'Energy Vastu'
];

const sortedCategories = [...categories].sort((a, b) => {
  const aIndex = priorityCategories.indexOf(a);
  const bIndex = priorityCategories.indexOf(b);

  if (aIndex !== -1 && bIndex !== -1) {
    return aIndex - bIndex;
  }

  if (aIndex !== -1) return -1;
  if (bIndex !== -1) return 1;

  return 0;
});
  return (
    <div className={styles.homepage}>
      <HeroSection />

      {/* Trust bar */}
      <section className={styles.trustBar}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            {[
              { icon: <FiTruck />, title: 'Free Shipping', desc: 'Orders above ₹500' },
              { icon: <FiShield />, title: 'Certified Authentic', desc: 'Lab-verified products' },
              { icon: <FiHeart />, title: 'Energy Cleansed', desc: 'Before every dispatch' },
              { icon: <FiStar />, title: '4.9★ Rated', desc: '10,000+ happy customers' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.trustItem}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className={styles.trustIcon}>{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Collections"
            title="Shop by Sacred Category"
            subtitle="Every piece is hand-selected for authenticity, energy and intention."
          />
          <div className={styles.categoryGrid}>

            {sortedCategories.map((cat, i) => {
              const categoryProducts = getProductsByCategory(cat);
              const previewProducts = categoryProducts.slice(0, 3);
              const count = categoryProducts.length;
              return (
                <motion.div
                  key={cat}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/category/${getCategorySlug(cat)}`}
                    className={styles.categoryCard}
                  >
                    <span className={styles.catNumber}>{String(i + 1).padStart(2, '0')}</span>
                    <div className={styles.categoryPreview}>
                      {previewProducts.map((product, index) => (
                        <div
                          key={product.id}
                          className={styles.previewCard}
                          style={{
                            zIndex: 3 - index,
                            transform: `translateX(${index * 18}px) translateY(${index * 8}px)`
                          }}
                        >
                          <img
                            src={product.images?.[0] || product.image}
                            alt={product.title}
                          />
                        </div>
                      ))}
                    </div>
                    <h3>{cat}</h3>
                    <p>{count} products</p>
                    <span className={styles.catArrow}>
                      <FiArrowRight />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className={styles.featured}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Curated"
            title="Featured Collection"
            subtitle="Our most loved spiritual essentials, chosen for transformative energy."
          />
          <div className={styles.productGrid}>
            {featured.slice(0, 8).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <motion.div
            className={styles.ctaWrap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/shop" className={styles.ctaBtn}>
              View All Products <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <ProductSlider title="Trending Now" products={featured} />

      {/* Best sellers */}
      {bestSellers.length > 0 && (
        <section className={styles.bestSellers}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Bestsellers"
              title="Most Loved by Our Community"
              subtitle="Products that consistently transform spaces and spirits."
            />
            <div className={styles.productGrid}>
              {bestSellers.slice(0, 4).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why us */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <motion.div
              className={styles.whyCopy}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.whyEyebrow}>Our Promise</span>
              <h2>Where Ancient Wisdom Meets Modern Luxury</h2>
              <p>
                Vaastu Sanctuary curates authentic spiritual products from trusted sources
                worldwide — each item energy-cleansed and quality-verified before it reaches you.
              </p>
              <ul className={styles.whyList}>
                {[
                  'Ethically sourced from certified suppliers',
                  'Energy cleansed & intention-set before shipping',
                  'Secure WhatsApp ordering with personal support',
                  '30-day satisfaction guarantee',
                ].map((text) => (
                  <li key={text}>
                    <FiCheck /> {text}
                  </li>
                ))}
              </ul>
              <Link to="/about" className={styles.whyCta}>
                Discover Our Story <FiArrowRight />
              </Link>
            </motion.div>
            <motion.div
              className={styles.whyVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.whyCard}>
                <FiAward size={48} />
                <strong>Premium Quality</strong>
                <span>Since 2018</span>
              </div>
              <div className={styles.whyOrb} />
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ProductSlider title="Healing Essentials" products={bestSellers} />
      <InstagramGallery />

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.newsEyebrow}>Stay Connected</span>
            <h2>Join Our Spiritual Circle</h2>
            <p>Exclusive offers, vastu wisdom & early access to new arrivals.</p>
            <form
              className={styles.newsForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="your@email.com" required />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>

      <HomeFaq />
    </div>
  );
};

export default Homepage;
