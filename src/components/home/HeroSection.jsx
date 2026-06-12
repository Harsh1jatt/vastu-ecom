import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import styles from "./HeroSection.module.css";

const slides = [
  {
    id: 1,
    image: "/images/slide1.webp",
    category: "/vastu",
  },
  {
    id: 2,
    image: "/images/slide2.webp",
    category: "/energyvastu",
  },
  {
    id: 3,
    image: "/images/slide3.webp",
    category: "/gemstones",
  },
  {
    id: 4,
    image: "/images/slide4.webp",
    category: "/yantra",
  },
  {
    id: 5,
    image: "/images/slide5.png",
    category: "/contact",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

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
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className={styles.slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slides[current].image}
            alt="Hero Banner"
            className={styles.image}
          />

          <div className={styles.overlay} />

          <Link
            to={slides[current].category}
            className={styles.exploreBtn}
          >
            Explore More
          </Link>
        </motion.div>
      </AnimatePresence>

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
      >
        <FiChevronLeft />
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
      >
        <FiChevronRight />
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={
              current === index
                ? styles.activeDot
                : ""
            }
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;