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
          <div className={styles.image}>
            <ProductImage src={product.images[0]} alt={product.title} />
            {discount > 0 && <span className={styles.badge}>{discount}% OFF</span>}
          </div>
          <div className={styles.info}>
            <span className={styles.category}>{product.category}</span>
            <h2>{product.title}</h2>
            <p className={styles.id}>ID: {product.id}</p>
            <p className={styles.desc}>{product.shortDescription}</p>
            <div className={styles.rating}>
              {'★'.repeat(Math.round(product.rating))} {product.rating} ({product.reviews} reviews)
            </div>
            <div className={styles.price}>
              {product.discountPrice ? (
                <>
                  <span className={styles.old}>₹{product.price}</span>
                  <span>₹{product.discountPrice}</span>
                </>
              ) : (
                <span>₹{product.price}</span>
              )}
            </div>
            <div className={styles.actions}>
              <button type="button" onClick={handleAdd} disabled={!product.stock}>
                <FiShoppingCart /> Add to Cart
              </button>
              <button
                type="button"
                className={inWishlist ? styles.wishActive : ''}
                onClick={() => toggleWishlist(product)}
              >
                <FiHeart fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
              <Link to={`/product/${product.slug}`} onClick={onClose}>
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
