import React from 'react';
import { FiX } from 'react-icons/fi';
import styles from './FiltersSidebar.module.css';

/**
 * FiltersSidebar Component
 * Clean & Optimized Filters Sidebar
 */

export const FiltersSidebar = ({
  isOpen,
  onClose,
  filters,
  metadata,
  handlers,
}) => {
  const {
    selectedCategories,
    selectedSubcategories,
    selectedTags,
    priceRange,
    search,
    inStock,
  } = filters;

  const {
    categories,
    tags,
    visibleSubcategories,
  } = metadata;

  const {
    onCategoryToggle,
    onSubcategoryToggle,
    onTagToggle,
    onSearchChange,
    onPriceRangeChange,
    onInStockToggle,
    onClearFilters,
  } = handlers;

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
        />
      )}

      <aside
      onClick={(e) => e.stopPropagation()}
        className={`${styles.sidebar} ${
          isOpen ? styles.open : ''
        }`}
      >
        {/* HEADER */}
        <div className={styles.sidebarHeader}>
          <h2>Filters</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close filters"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* SEARCH */}
        <div className={styles.filterGroup}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            className={styles.searchInput}
          />
        </div>

        {/* CATEGORIES */}
        <div className={styles.filterGroup}>
          <h3>Categories</h3>

          {categories.map((category) => (
            <label
              key={category}
              className={styles.checkbox}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(
                  category
                )}
                onChange={() =>
                  onCategoryToggle(category)
                }
              />

              <span>{category}</span>
            </label>
          ))}
        </div>

        {/* SUBCATEGORIES */}
        {visibleSubcategories.length > 0 && (
          <div className={styles.filterGroup}>
            <h3>Subcategories</h3>

            {visibleSubcategories.map(
              (subcategory) => (
                <label
                  key={subcategory}
                  className={styles.checkbox}
                >
                  <input
                    type="checkbox"
                    checked={selectedSubcategories.includes(
                      subcategory
                    )}
                    onChange={() =>
                      onSubcategoryToggle(
                        subcategory
                      )
                    }
                  />

                  <span>{subcategory}</span>
                </label>
              )
            )}
          </div>
        )}

{/* PRICE */}
<div className={styles.filterGroup}>
  <h3>Price Range</h3>

  <div className={styles.rangeValues}>
    <span>₹{priceRange.min}</span>
    <span>₹{priceRange.max}</span>
  </div>

  <div className={styles.rangeSliders}>
    {/* MIN RANGE */}
    <input
      type="range"
      min="0"
      max="50000"
      step="100"
      value={priceRange.min}
      onChange={(e) =>
        onPriceRangeChange({
          ...priceRange,
          min: Math.min(
            Number(e.target.value),
            priceRange.max - 100
          ),
        })
      }
      className={styles.rangeInput}
    />

    {/* MAX RANGE */}
    <input
      type="range"
      min="0"
      max="50000"
      step="100"
      value={priceRange.max}
      onChange={(e) =>
        onPriceRangeChange({
          ...priceRange,
          max: Math.max(
            Number(e.target.value),
            priceRange.min + 100
          ),
        })
      }
      className={styles.rangeInput}
    />
  </div>
</div>

        {/* SMART TAGS */}
        {tags?.length > 0 && (
          <div className={styles.filterGroup}>
            <h3>Popular Tags</h3>

            <div className={styles.tagsWrapper}>
              {tags
                .slice(0, 12)
                .map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`${styles.tagBtn} ${
                      selectedTags.includes(tag)
                        ? styles.activeTag
                        : ''
                    }`}
                    onClick={() =>
                      onTagToggle(tag)
                    }
                  >
                    {tag}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* STOCK */}
        <div className={styles.filterGroup}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={inStock}
              onChange={onInStockToggle}
            />

            <span>In Stock Only</span>
          </label>
        </div>

        {/* CLEAR */}
        <button
          className={styles.clearBtn}
          onClick={onClearFilters}
        >
          Clear All Filters
        </button>
      </aside>
    </>
  );
};

export default FiltersSidebar;