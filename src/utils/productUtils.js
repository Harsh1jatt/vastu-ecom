import productsData from '../data/products';

export const getAllProducts = () => productsData;

export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const getCategorySlug = (category) => slugify(category);

export const getCategoryBySlug = (slug) => {
  const normalized = slug?.toLowerCase();
  return getCategories().find((c) => getCategorySlug(c) === normalized) || null;
};

// Get all unique categories
export const getCategories = () => {
  const categories = [...new Set(productsData.map((p) => p.category))];
  return categories.sort();
};

// Get subcategories for a specific category
export const getSubcategories = (category) => {
  const subcategories = [
    ...new Set(
      productsData
        .filter((p) => p.category === category)
        .map((p) => p.subcategory)
    ),
  ];
  return subcategories.sort();
};

// Get all unique tags
export const getAllTags = () => {
  const tagsSet = new Set();
  productsData.forEach((product) => {
    product.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

// Get products by category
export const getProductsByCategory = (category) => {
  return productsData.filter((p) => p.category === category);
};

// Get featured products
export const getFeaturedProducts = () => {
  return productsData.filter((p) => p.featured);
};

// Get best sellers
export const getBestSellers = () => {
  return productsData.filter((p) => p.bestSeller);
};

// Get product by slug
export const getProductBySlug = (slug) => {
  return productsData.find((p) => p.slug === slug);
};

// Get product by ID
export const getProductById = (id) => {
  return productsData.find((p) => p.id === id);
};

// Search products
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return productsData.filter(
    (p) =>
      p.title.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.shortDescription.toLowerCase().includes(lowercaseQuery)
  );
};

// Filter products
export const filterProducts = (
  products,
  { categories, subcategories, tags, priceRange, rating, inStock }
) => {
  let filtered = [...products];

  if (categories && categories.length > 0) {
    filtered = filtered.filter((p) => categories.includes(p.category));
  }

  if (subcategories && subcategories.length > 0) {
    filtered = filtered.filter((p) => subcategories.includes(p.subcategory));
  }

  if (tags && tags.length > 0) {
    filtered = filtered.filter((p) =>
      p.tags.some((tag) => tags.includes(tag))
    );
  }

  if (priceRange) {
    filtered = filtered.filter(
      (p) =>
        (p.discountPrice || p.price) >= priceRange.min &&
        (p.discountPrice || p.price) <= priceRange.max
    );
  }

  if (rating) {
    filtered = filtered.filter((p) => p.rating >= rating);
  }

  if (inStock) {
    filtered = filtered.filter((p) => p.stock);
  }

  return filtered;
};

// Sort products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort(
        (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price)
      );
    case 'price-high':
      return sorted.sort(
        (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price)
      );
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'reviews':
      return sorted.sort((a, b) => b.reviews - a.reviews);
    case 'newest':
      return sorted.reverse();
    default:
      return sorted;
  }
};

// Get related products
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];

  return productsData
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== productId
    )
    .slice(0, limit);
};

export const paginateProducts = (products, page = 1, perPage = 12) => {
  const start = (page - 1) * perPage;
  return {
    items: products.slice(start, start + perPage),
    totalPages: Math.ceil(products.length / perPage) || 1,
    total: products.length,
    page,
    perPage,
  };
};

// Get max price
export const getMaxPrice = () => {
  return Math.max(...productsData.map((p) => p.discountPrice || p.price));
};

// Get min price
export const getMinPrice = () => {
  return Math.min(...productsData.map((p) => p.discountPrice || p.price));
};
