import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiZoomIn, FiEye } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { useToast } from '../../context/ToastContext';
import { getDiscountPercentage } from '../../utils/helpers';
import ProductImage from '../common/ProductImage';
import QuickViewModal from './QuickViewModal';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, index = 0 }) => {
  const [quickView, setQuickView] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const inWishlist = isInWishlist(product.id);
  const discountPercent = getDiscountPercentage(product.price, product.discountPrice);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`${product.title} added to cart`);
  };
  const isGemstone = product.category === 'Gemstones';
  const isPerPiece =
    product.category === 'Oils' || product.category === 'Rods';
  return (
    <>
      <article className={styles.card}>
        <div className={styles.imageWrap}>
          <Link to={`/product/${product.slug}`} className={styles.imageLink}>
            <ProductImage src={product.images[0]} alt={product.title} className={styles.image} />
            {product.images[1] && (
              <ProductImage
                src={product.images[1]}
                alt={product.title}
                className={styles.imageAlt}
              />
            )}
          </Link>

          {!isGemstone && discountPercent > 0 && (
            <span className={styles.discountBadge}>
              -{discountPercent}%
            </span>
          )}
          {!product.stock && <span className={styles.stockBadge}>Sold Out</span>}

          <div className={styles.floatingActions}>
            <button
              type="button"
              className={`${styles.actionBtn} ${inWishlist ? styles.wishActive : ''}`}
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product);
                showToast(inWishlist ? 'Removed from wishlist' : 'Added to wishlist');
              }}
              aria-label="Wishlist"
            >
              <FiHeart fill={inWishlist ? 'currentColor' : 'none'} />
            </button>
            <button
              type="button"
              className={styles.actionBtn}
              onClick={(e) => {
                e.preventDefault();
                setQuickView(true);
              }}
              aria-label="Quick view"
            >
              <FiZoomIn />
            </button>
            {!isGemstone && (
              <button
                type="button"
                className={styles.actionBtn}
                onClick={handleAddToCart}
                disabled={!product.stock}
                aria-label="Add to cart"
              >
                <FiShoppingCart />
              </button>
            )}
          </div>

          <button
            type="button"
            className={styles.quickAdd}
            onClick={handleAddToCart}
            disabled={!product.stock}
          >
            <FiShoppingCart /> Quick Add
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.metaTop}>
            <span className={styles.category}>{product.category}</span>
            <span className={styles.sku}>{product.id}</span>
          </div>
          <Link to={`/product/${product.slug}`}>
            <h3 className={styles.title}>{product.title}</h3>
          </Link>
          <p className={styles.desc}>{product.shortDescription}</p>
          <div className={styles.rating}>
            <span className={styles.stars}>{'★'.repeat(Math.round(product.rating))}</span>
            <span>{product.rating}</span>
            <span className={styles.reviewCount}>({product.reviews})</span>
          </div>
          <div className={styles.priceRow}>
            {isGemstone ? (
              <span className={styles.contactPrice}>
                Price on Request
              </span>
            ) : product.discountPrice ? (
              <>
                <span className={styles.price}>
                  ₹{product.discountPrice}
                  {isPerPiece && (
                    <span className={styles.priceUnit}> / Piece</span>
                  )}
                </span>
                <span className={styles.oldPrice}>₹{product.price}</span>
              </>
            ) : (
              <span className={styles.price}>
                ₹{product.price}
                {isPerPiece && (
                  <span className={styles.priceUnit}> / Piece</span>
                )}
              </span>
            )}
          </div>
          <Link to={`/product/${product.slug}`} className={styles.viewLink}>
            <FiEye /> View Details
          </Link>
        </div>
      </article>

      {quickView && (
        <QuickViewModal product={product} onClose={() => setQuickView(false)} />
      )}
    </>
  );
};

export default ProductCard;
