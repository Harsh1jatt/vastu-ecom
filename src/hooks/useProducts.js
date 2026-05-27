import { useState, useMemo, useCallback } from 'react';
import productsData from '../data/products';
import {
  getCategories,
  getSubcategories,
  getAllTags,
  getMaxPrice,
  getMinPrice,
  searchProducts,
  filterProducts,
  sortProducts,
  paginateProducts,
} from '../utils/productUtils';

/**
 * Custom hook for managing product filtering, sorting, and pagination
 * Encapsulates all shop page filtering logic
 * @param {Object} initialParams - Initial filter parameters from URL
 * @returns {Object} - Filtered products and filter management functions
 */
export const useProducts = (initialParams = {}) => {
  // ========================
  // STATE
  // ========================

  const [selectedCategories, setSelectedCategories] = useState(
    initialParams.categories || []
  );
  const [selectedSubcategories, setSelectedSubcategories] = useState(
    initialParams.subcategories || []
  );
  const [selectedTags, setSelectedTags] = useState(initialParams.tags || []);
  const [priceRange, setPriceRange] = useState({
    min: initialParams.minPrice ?? getMinPrice(),
    max: initialParams.maxPrice ?? getMaxPrice(),
  });
  const [sortBy, setSortBy] = useState(initialParams.sort || 'featured');
  const [search, setSearch] = useState(initialParams.search || '');
  const [inStock, setInStock] = useState(initialParams.inStock || false);
  const [page, setPage] = useState(1);

  // ========================
  // METADATA
  // ========================

  const categories = useMemo(() => getCategories(), []);
  const tags = useMemo(() => getAllTags(), []);
  const maxPrice = useMemo(() => getMaxPrice(), []);
  const minPrice = useMemo(() => getMinPrice(), []);

  // ========================
  // HANDLERS
  // ========================

  const handleCategoryToggle = useCallback((category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setPage(1); // Reset to first page on filter change
  }, []);

  const handleSubcategoryToggle = useCallback((subcategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((s) => s !== subcategory)
        : [...prev, subcategory]
    );
    setPage(1);
  }, []);

  const handleTagToggle = useCallback((tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
    setPage(1);
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setSortBy(newSort);
    setPage(1);
  }, []);

  const handleSearchChange = useCallback((query) => {
    setSearch(query);
    setPage(1);
  }, []);

  const handlePriceRangeChange = useCallback((newRange) => {
    setPriceRange(newRange);
    setPage(1);
  }, []);

  const handleInStockToggle = useCallback(() => {
    setInStock((prev) => !prev);
    setPage(1);
  }, []);

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedTags([]);
    setPriceRange({ min: minPrice, max: maxPrice });
    setSearch('');
    setSortBy('featured');
    setInStock(false);
    setPage(1);
  }, [minPrice, maxPrice]);

  // ========================
  // COMPUTED FILTERS
  // ========================

  const visibleSubcategories = useMemo(
    () =>
      selectedCategories.length > 0
        ? [...new Set(selectedCategories.flatMap((cat) => getSubcategories(cat)))]
        : [],
    [selectedCategories]
  );

  // ========================
  // FILTERING & SORTING
  // ========================

  const filteredProducts = useMemo(() => {
    let products = search ? searchProducts(search) : productsData;

    products = filterProducts(products, {
      categories: selectedCategories.length > 0 ? selectedCategories : null,
      subcategories: selectedSubcategories.length > 0 ? selectedSubcategories : null,
      tags: selectedTags.length > 0 ? selectedTags : null,
      priceRange: { min: priceRange.min, max: priceRange.max },
      inStock: inStock ? true : false,
    });

    products = sortProducts(products, sortBy);
    return products;
  }, [
    search,
    selectedCategories,
    selectedSubcategories,
    selectedTags,
    priceRange,
    sortBy,
    inStock,
  ]);

  // ========================
  // PAGINATION
  // ========================

  const { items: paginatedProducts, totalPages } = useMemo(
    () => paginateProducts(filteredProducts, page, 12),
    [filteredProducts, page]
  );

  // ========================
  // RETURN
  // ========================

  return {
    // Filtered & paginated products
    products: filteredProducts,
    paginatedProducts,
    totalPages,
    totalProducts: filteredProducts.length,

    // Current page
    page,
    onPageChange: handlePageChange,

    // Filters state
    filters: {
      selectedCategories,
      selectedSubcategories,
      selectedTags,
      priceRange,
      sortBy,
      search,
      inStock,
    },

    // Filter metadata
    metadata: {
      categories,
      tags,
      maxPrice,
      minPrice,
      visibleSubcategories,
    },

    // Filter handlers
    handlers: {
      onCategoryToggle: handleCategoryToggle,
      onSubcategoryToggle: handleSubcategoryToggle,
      onTagToggle: handleTagToggle,
      onSortChange: handleSortChange,
      onSearchChange: handleSearchChange,
      onPriceRangeChange: handlePriceRangeChange,
      onInStockToggle: handleInStockToggle,
      onClearFilters: clearFilters,
    },
  };
};

export default useProducts;
