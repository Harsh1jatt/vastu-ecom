import React from 'react';
import ProductCard from '../products/ProductCard';
import styles from './ProductsGrid.module.css';

/**
 * ProductsGrid Component
 * Displays paginated grid of products
 */
export const ProductsGrid = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <p>Loading products...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No products found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
