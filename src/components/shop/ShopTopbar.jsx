import React from 'react';
import { FiFilter } from 'react-icons/fi';
import styles from './ShopTopbar.module.css';

/**
 * ShopTopbar Component
 * Displays product count, sorting options, and filter toggle
 */
export const ShopTopbar = ({
  productCount,
  sortBy,
  onSortChange,
  onFilterToggle,
}) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.resultCount}>
        <p>Showing {productCount} products</p>
      </div>

      <div className={styles.controls}>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className={styles.sortSelect}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="reviews">Most Reviews</option>
        </select>

        <button
          className={styles.filterBtn}
          onClick={onFilterToggle}
          aria-label="Toggle filters"
        >
          <FiFilter size={20} />
          Filters
        </button>
      </div>
    </div>
  );
};

export default ShopTopbar;
