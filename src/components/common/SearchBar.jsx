import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi';
import { searchProducts } from '../../utils/productUtils';
import ProductImage from './ProductImage';
import styles from './SearchBar.module.css';

const SearchBar = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) setQuery('');
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    setResults(searchProducts(query).slice(0, 8));
  }, [query]);

  const goToProduct = (slug) => {
    navigate(`/product/${slug}`);
    onClose();
  };

  const goToShop = () => {
    navigate(`/shop?search=${encodeURIComponent(query)}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.searchHead}>
              <h3>Search our collection</h3>
              <button type="button" onClick={onClose} aria-label="Close">
                <FiX size={22} />
              </button>
            </div>
            <div className={styles.inputWrap}>
              <FiSearch size={22} />
              <input
                ref={inputRef}
                type="search"
                placeholder="Crystals, rudraksha, vastu, bracelets..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            {results.length > 0 && (
              <ul className={styles.results}>
                {results.map((p) => (
                  <li key={p.id}>
                    <button type="button" onClick={() => goToProduct(p.slug)}>
                      <ProductImage src={p.images[0]} alt={p.title} className={styles.thumb} />
                      <div>
                        <strong>{p.title}</strong>
                        <span>{p.category} · ₹{p.discountPrice || p.price}</span>
                      </div>
                      <FiArrowRight className={styles.resultArrow} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {query.length >= 2 && results.length === 0 && (
              <p className={styles.empty}>No products found for &quot;{query}&quot;</p>
            )}
            {query.length >= 2 && (
              <button type="button" className={styles.viewAll} onClick={goToShop}>
                View all results <FiArrowRight />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;
