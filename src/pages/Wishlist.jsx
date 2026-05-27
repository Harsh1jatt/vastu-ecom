import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/products/ProductCard';
import styles from './Wishlist.module.css';
import { FiTrash2 } from 'react-icons/fi';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.wishlist}>
        <div className={styles.container}>
          <div className={styles.emptyWishlist}>
            <div className={styles.emptyIcon}>❤️</div>
            <h2>Your Wishlist is Empty</h2>
            <p>Save your favorite products to your wishlist for later!</p>
            <Link to="/shop" className={styles.btn}>
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wishlist}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>My Wishlist</h1>
          <button className={styles.clearBtn} onClick={clearWishlist}>
            Clear All
          </button>
        </div>

        <div className={styles.wishlistGrid}>
          {wishlistItems.map((product) => (
            <div key={product.id} className={styles.wishlistItem}>
              <ProductCard product={product} />
              <div className={styles.itemActions}>
                <button
                  className={styles.removeFromWishlist}
                  onClick={() => removeFromWishlist(product.id)}
                  title="Remove from wishlist"
                >
                  <FiTrash2 size={18} />
                </button>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => addToCart(product, 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
