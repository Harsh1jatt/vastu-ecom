// src/pages/CategoryPage.jsx

import { useMemo } from 'react';

import { motion } from 'framer-motion';

import { useParams } from 'react-router-dom';

import {
  FiShoppingBag,
  FiStar,
} from 'react-icons/fi';

import products from '../data/products';

import ProductCard from '../components/products/ProductCard';

import styles from './CategoryPage.module.css';

// =========================
// SLUG HELPERS
// =========================

const slugify = (text = '') =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\u0900-\u097Fa-z0-9-]/g, '');

const unslugify = (text = '') =>
  decodeURIComponent(text)
    .replace(/-/g, ' ')
    .trim();

// =========================
// CATEGORY GROUPS
// =========================

const categoryGroups = {
  vastu: [
    'Strips',
    'Tapes',
    'Helix',
    'Springs',
    'Studs',
    'Pyramids',
    'Kilak',
    'Rods',
    'Resin Articles',
    'Devta Divs',
    'Shakti Chakra',
    'Compass',
  ],

  yantra: [
    'सिद्ध नवग्रह लॉकेट',
    'दैवीय यंत्र',
    'शिक्षा यंत्र',
    'सुरक्षा यंत्र',
    'व्यापार यंत्र',
    'ग्रह यंत्र',
    'धन यंत्र',
  ],
  gemstones: [
    'Gemstones',
  ],
  energyvastu: [
    'Brahmbooster',
    'Foundation Remedy',
    'Blocker',
    'Shield',
    'Opener',
    'Zone Remedy',
    'Direction Booster',
    'Balancer',
    'Protector',
  ],
  bracelets: [
    'Healing Bracelets',
    'Protection Bracelets',
    'Rudraksha Bracelets',
    'Crystal Bracelets',
    'Chakra Bracelets',
  ],

  crystals: [
    'Raw Crystals',
    'Healing Stones',
    'Crystal Clusters',
    'Crystal Trees',
    'Orgone Pyramids',
  ],

  rudraksha: [
    '1 Mukhi',
    '3 Mukhi',
    '5 Mukhi',
    '7 Mukhi',
    'Rudraksha Malas',
  ],


};

const CategoryPage = () => {

  const {
    category,
    subcategory,
  } = useParams();

  const decodedSubcategory =
    unslugify(subcategory || '');

  // =========================
  // PRODUCTS FILTER
  // =========================

  const pageProducts = useMemo(() => {

    // =========================
    // SUBCATEGORY PAGE
    // =========================

    if (subcategory) {

      // =========================
      // YANTRA SPECIAL CASE
      // =========================

      if (category === 'yantra' || category === 'energyvastu') {

        return products.filter(
          (product) =>
            slugify(product.subcategory) ===
            slugify(decodedSubcategory)
        );
      }

      // =========================
      // NORMAL CATEGORIES
      // =========================

      return products.filter(
        (product) =>
          slugify(product.category) ===
          slugify(decodedSubcategory)
      );
    }

    // =========================
    // MAIN CATEGORY PAGE
    // =========================

    if (category === 'yantra') {
      return products.filter(
        product => product.category === 'Yantra'
      );
    }

    if (category === 'energyvastu') {
      return products.filter(
        product => product.category === 'Energy Vastu'
      );
    }

    return products.filter((product) =>
      categoryGroups[category]?.includes(
        product.category
      )
    );

  }, [category, subcategory, decodedSubcategory]);

  // =========================
  // PAGE TITLE
  // =========================

  const currentTitle =
    decodedSubcategory || category;

  const pageTitle =
    category === 'yantra' &&
      decodedSubcategory
      ? decodedSubcategory
      : currentTitle
        ?.replace(/-/g, ' ')
        .replace(/\b\w/g, (char) =>
          char.toUpperCase()
        );

  return (
    <div className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <span className={styles.badge}>
              <FiStar />
              Premium Spiritual Collection
            </span>

            <h1>{pageTitle}</h1>

            <p>
              Explore authentic {pageTitle}
              {' '}products crafted for
              positivity, healing,
              prosperity and spiritual
              harmony.
            </p>

          </motion.div>

        </div>
      </section>

      {/* PRODUCTS */}

      <section
        className={styles.productsSection}
      >

        <div className={styles.sectionHead}>

          <div>
            <span
              className={styles.subHeading}
            >
              Sacred Collection
            </span>

            <h2>
              {pageProducts.length}
              {' '}Products Found
            </h2>
          </div>

          <div className={styles.countBox}>
            <FiShoppingBag />
            {pageProducts.length} Items
          </div>

        </div>

        {/* EMPTY */}

        {pageProducts.length === 0 ? (

          <div className={styles.empty}>
            <h3>No Products Found</h3>

            <p>
              Products for this category
              will be added soon.
            </p>
          </div>

        ) : (

          <div
            className={styles.productsGrid}
          >

            {pageProducts.map(
              (product, index) => (

                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />

              )
            )}

          </div>

        )}

      </section>
    </div>
  );
};

export default CategoryPage;