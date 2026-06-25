import { Link } from 'react-router-dom';
import { FiX, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { useToast } from '../../context/ToastContext';
import ProductImage from '../common/ProductImage';
import { getDiscountPercentage } from '../../utils/helpers';
import styles from './QuickViewModal.module.css';

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  if (!product) return null;

  const discount = getDiscountPercentage(product.price, product.discountPrice);
  const inWishlist = isInWishlist(product.id);

  const isGemstone =
    product.category?.toLowerCase() === 'gemstones' ||
    product.category?.toLowerCase() === 'gemstone';

  const isPerPiece =
    product.category?.toLowerCase() === 'oils' ||
    product.category?.toLowerCase() === 'rods';

  const handleAdd = () => {
    addToCart(product, 1);
    showToast(`${product.title} added to cart`);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          <FiX size={22} />
        </button>

        <div className={styles.grid}>
          {/* LEFT — image */}
          <div className={styles.imageWrap}>
            <ProductImage src={product.images[0]} alt={product.title} className={styles.image} />
            {!isGemstone && discount > 0 && (
              <span className={styles.badge}>{discount}% OFF</span>
            )}
          </div>

          {/* RIGHT — info */}
          <div className={styles.info}>
            <span className={styles.category}>{product.category}</span>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.id}>ID: {product.id}</p>
            <p className={styles.desc}>{product.shortDescription}</p>
            <div className={styles.rating}>
              {'★'.repeat(Math.round(product.rating))}{' '}
              {product.rating} ({product.reviews} reviews)
            </div>

            <div className={styles.priceRow}>
              {isGemstone ? (
                <p className={styles.gemstonePrice}>
                  Price depends on gemstone quality, weight and certification.
                  Contact us on WhatsApp for exact pricing.
                </p>
              ) : product.discountPrice ? (
                <>
                  <span className={styles.oldPrice}>₹{product.price}</span>
                  <span className={styles.price}>
                    ₹{product.discountPrice}
                    {isPerPiece && <span className={styles.priceUnit}> / Piece</span>}
                  </span>
                </>
              ) : (
                <span className={styles.price}>
                  ₹{product.price}
                  {isPerPiece && <span className={styles.priceUnit}> / Piece</span>}
                </span>
              )}
            </div>

            <div className={styles.actions}>
              {!isGemstone && (
                <button
                  type="button"
                  className={styles.btnCart}
                  onClick={handleAdd}
                  disabled={!product.stock}
                >
                  <FiShoppingCart /> Add to Cart
                </button>
              )}
              {!isGemstone && (
                <button
                  type="button"
                  className={`${styles.btnWish} ${inWishlist ? styles.wishActive : ''}`}
                  onClick={() => toggleWishlist(product)}
                  aria-label="Toggle wishlist"
                >
                  <FiHeart fill={inWishlist ? 'currentColor' : 'none'} />
                </button>
              )}
              <Link
                to={`/product/${product.slug}`}
                className={styles.viewLink}
                onClick={onClose}
              >
                {isGemstone ? 'View Gemstone Details' : 'View Details'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;