import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../context/ToastContext';
import { getProductBySlug, getRelatedProducts } from '../utils/productUtils';
import { getDiscountPercentage, getBuyNowWhatsAppLink } from '../utils/helpers';
import ProductCard from '../components/products/ProductCard';
import ProductImage from '../components/common/ProductImage';
import styles from './ProductDetails.module.css';

const TABS = ['description', 'details', 'reviews'];

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [zoomed, setZoomed] = useState(false);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const relatedProducts = product ? getRelatedProducts(product.id) : [];

  if (!product) {
    return (
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1>Product Not Found</h1>
          <button type="button" className={styles.backBtn} onClick={() => navigate('/shop')}>
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const discountPercent = getDiscountPercentage(product.price, product.discountPrice);
  const displayPrice = product.discountPrice || product.price;
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${product.title} added to cart`);
    setQuantity(1);
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.container}>
        <button type="button" className={styles.breadcrumb} onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className={styles.content}>
          <div className={styles.imageGallery}>
            <div
              className={`${styles.mainImage} ${zoomed ? styles.zoomed : ''}`}
              onClick={() => setZoomed(!zoomed)}
            >
              <ProductImage src={product.images[selectedImage]} alt={product.title} />
              {discountPercent > 0 && (
                <div className={styles.badge}>{discountPercent}% OFF</div>
              )}
              {!product.stock && <div className={styles.outOfStock}>Out of Stock</div>}
              {product.images.length > 1 && (
                <>
                  <button type="button" className={styles.navButton} onClick={(e) => { e.stopPropagation(); setSelectedImage((p) => (p === 0 ? product.images.length - 1 : p - 1)); }}>
                    <FiChevronLeft size={24} />
                  </button>
                  <button type="button" className={`${styles.navButton} ${styles.navRight}`} onClick={(e) => { e.stopPropagation(); setSelectedImage((p) => (p === product.images.length - 1 ? 0 : p + 1)); }}>
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className={styles.thumbnails}>
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    className={i === selectedImage ? styles.active : ''}
                    onClick={() => setSelectedImage(i)}
                  >
                    <ProductImage src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.info}>
            <span className={styles.category}>{product.category}</span>
            <h1>{product.title}</h1>
            <p className={styles.productId}>SKU: {product.id}</p>
            <div className={styles.rating}>
              <span>{'★'.repeat(Math.round(product.rating))}</span>
              {product.rating} ({product.reviews} reviews)
            </div>
            <p className={styles.shortDesc}>{product.shortDescription}</p>
            <div className={styles.priceSection}>
              {product.discountPrice ? (
                <>
                  <span className={styles.originalPrice}>₹{product.price}</span>
                  <span className={styles.price}>₹{displayPrice}</span>
                </>
              ) : (
                <span className={styles.price}>₹{displayPrice}</span>
              )}
            </div>
            <div className={styles.stock}>
              {product.stock ? (
                <span className={styles.inStock}>● In Stock</span>
              ) : (
                <span className={styles.outOfStockText}>Out of Stock</span>
              )}
            </div>
            <div className={styles.tags}>
              {product.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.quantitySection}>
              <label>Quantity</label>
              <div className={styles.quantityControl}>
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={!product.stock}>−</button>
                <input type="number" value={quantity} min={1} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))} disabled={!product.stock} />
                <button type="button" onClick={() => setQuantity(quantity + 1)} disabled={!product.stock}>+</button>
              </div>
            </div>
            <div className={styles.actions}>
              <button type="button" className={styles.addToCartBtn} onClick={handleAddToCart} disabled={!product.stock}>
                <FiShoppingCart /> Add to Cart
              </button>
              <a href={getBuyNowWhatsAppLink(product, quantity)} target="_blank" rel="noopener noreferrer" className={styles.buyNowBtn}>
                <FaWhatsapp /> Buy Now
              </a>
              <button type="button" className={`${styles.wishlistBtn} ${inWishlist ? styles.wishActive : ''}`} onClick={() => toggleWishlist(product)}>
                <FiHeart fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>
            <div className={styles.meta}>
              <div><strong>Category:</strong> {product.category}</div>
              <div><strong>Subcategory:</strong> {product.subcategory}</div>
            </div>
      
          </div>
        </div>

        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button key={tab} type="button" className={activeTab === tab ? styles.tabActive : ''} onClick={() => setActiveTab(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
        {activeTab === 'description' && (
  <div
    className={styles.productDescription}
    dangerouslySetInnerHTML={{
      __html: product.description,
    }}
  />
)}
          {activeTab === 'details' && (
            <ul>
              <li>Product ID: {product.id}</li>
              <li>Category: {product.category}</li>
              <li>Subcategory: {product.subcategory}</li>
              <li>Tags: {product.tags.join(', ')}</li>
            </ul>
          )}
          {activeTab === 'reviews' && (
            <div className={styles.reviewsUi}>
              <p className={styles.reviewsSummary}>
                Average rating: <strong>{product.rating}</strong> from {product.reviews} reviews
              </p>
              <div className={styles.reviewPlaceholder}>
                <p>★★★★★ &ldquo;Beautiful product, exactly as described.&rdquo; — Verified Buyer</p>
                <p>★★★★☆ &ldquo;Fast delivery and authentic quality.&rdquo; — Verified Buyer</p>
              </div>
            </div>
          )}
        </div>

        {relatedProducts.length > 0 && (
          <section className={styles.relatedSection}>
            <h2>Related Products</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
