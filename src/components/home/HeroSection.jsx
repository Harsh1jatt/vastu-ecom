import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FiArrowRight,
  FiStar,
  FiShield,
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

import styles from './HeroSection.module.css';

const slides = [
  {
    id: 1,
    image: '/hero/hero-main.jpg',
    subtitle: 'Trusted Spiritual & Vastu Store',
    title: 'Bring Harmony, Positivity & Prosperity',
    highlight: 'Into Your Space',
    desc:
      'Discover authentic vastu remedies, healing crystals, pyramids, bracelets, rudraksha and sacred wellness products crafted to elevate your energy and lifestyle.',
  },

  {
    id: 2,
    image: '/hero/crystal.jpg',
    subtitle: 'Healing Energy Collection',
    title: 'Premium Crystals For',
    highlight: 'Positive Vibrations',
    desc:
      'Enhance your spiritual journey with healing crystals, energy stones and premium wellness products.',
  },

  {
    id: 3,
    image: '/hero/pyramid.jpg',
    subtitle: 'Luxury Spiritual Products',
    title: 'Transform Your Home With',
    highlight: 'Vastu Energy',
    desc:
      'Create balance, positivity and prosperity in your home with authentic vastu solutions and sacred products.',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.hero}>
      {/* BACKGROUND */}
      <div className={styles.bg}>
        <div className={styles.blur1} />
        <div className={styles.blur2} />
        <div className={styles.pattern} />
      </div>

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.badge}>
                <FiStar />
                {slides[current].subtitle}
              </div>

              <h1>
                {slides[current].title}
                <span> {slides[current].highlight}</span>
              </h1>

              <p>{slides[current].desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.actions}>
            <Link to="/shop" className={styles.primaryBtn}>
              Explore Collection
              <FiArrowRight />
            </Link>

            <Link to="/about" className={styles.secondaryBtn}>
              Learn More
            </Link>
          </div>

          <div className={styles.features}>
            <div>
              <FiShield />
              <span>100% Authentic</span>
            </div>

            <div>
              <FiHeart />
              <span>10K+ Happy Customers</span>
            </div>

            <div>
              <FiStar />
              <span>Premium Quality</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.slider}>
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current].image}
                src={slides[current].image}
                alt={slides[current].title}
                className={styles.sliderImage}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>

            <div className={styles.overlay} />

            {/* ARROWS */}
            <button
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={prevSlide}
            >
              <FiChevronLeft />
            </button>

            <button
              className={`${styles.arrow} ${styles.rightArrow}`}
              onClick={nextSlide}
            >
              <FiChevronRight />
            </button>

            {/* TEXT */}
            <div className={styles.sliderContent}>
              <span>Premium Spiritual Collection</span>
              <h3>{slides[current].highlight}</h3>
            </div>

            {/* DOTS */}
            <div className={styles.dots}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={
                    current === index
                      ? styles.activeDot
                      : ''
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;