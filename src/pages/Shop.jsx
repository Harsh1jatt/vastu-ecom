import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FiltersSidebar from '../components/shop/FiltersSidebar';
import ShopTopbar from '../components/shop/ShopTopbar';
import ProductsGrid from '../components/shop/ProductsGrid';
import Pagination from '../components/shop/Pagination';
import { useProducts } from '../hooks/useProducts';
import styles from './Shop.module.css';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Initialize useProducts hook with URL params
  const {
    products: filteredProducts,
    paginatedProducts,
    totalPages,
    page,
    filters,
    metadata,
    handlers,
    onPageChange,
  } = useProducts({
    categories: searchParams.get('categories')?.split(',').filter(Boolean) || [],
    subcategories: searchParams.get('subcategories')?.split(',').filter(Boolean) || [],
    tags: searchParams.get('tags')?.split(',').filter(Boolean) || [],
    minPrice: parseInt(searchParams.get('minPrice')) || undefined,
    maxPrice: parseInt(searchParams.get('maxPrice')) || undefined,
    sort: searchParams.get('sort') || 'featured',
    search: searchParams.get('search') || '',
    inStock: searchParams.get('inStock') === 'true',
  });


  return (
    <div className={styles.shop}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>Shop All Products</h1>
          <p>Discover our premium collection of spiritual and wellness products</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Filters Sidebar */}
          <FiltersSidebar
            isOpen={filtersOpen}
            onClose={() => setFiltersOpen(false)}
            filters={filters}
            metadata={metadata}
            handlers={handlers}
          />

          {/* Main Section */}
          <div className={styles.main}>
            {/* Top Bar */}
            <ShopTopbar
              productCount={filteredProducts.length}
              sortBy={filters.sortBy}
              onSortChange={handlers.onSortChange}
              onFilterToggle={() => setFiltersOpen(!filtersOpen)}
            />

            {/* Products Grid or Empty State */}
            {filteredProducts.length > 0 ? (
              <>
                <ProductsGrid products={paginatedProducts} />
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              </>
            ) : (
              <div className={styles.noProducts}>
                <p>No products found matching your filters.</p>
                <button className={styles.btn} onClick={handlers.onClearFilters}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
