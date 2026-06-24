import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),

  center: {
    x: 0,
  },

  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
  }),
};

export default function HeroSection() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 80;

    if (info.offset.x < -swipeThreshold) {
      paginate(1);
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1);
    }
  };

  return (
    <section className={styles.hero}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[current].id}
          className={styles.slide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          <img
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className={styles.image}
            draggable={false}
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
        onClick={() => paginate(-1)}
        aria-label="Previous Slide"
      >
        <FiChevronLeft />
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => paginate(1)}
        aria-label="Next Slide"
      >
        <FiChevronRight />
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const dir = index > current ? 1 : -1;
              setCurrent([index, dir]);
            }}
            className={
              current === index
                ? styles.activeDot
                : ""
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}