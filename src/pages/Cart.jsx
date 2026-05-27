import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';
import { getWhatsAppLink } from '../utils/helpers';
import ProductImage from '../components/common/ProductImage';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart, getTotalItems } =
    useCart();

  const totalPrice = getTotalPrice();
  const itemCount = getTotalItems();

  if (cartItems.length === 0) {
    return (
      <div className={styles.cart}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>View Cart</span>
          </nav>
          <div className={styles.emptyCart}>
            <div className={styles.emptyIcon}>
              <FiShoppingBag size={64} />
            </div>
            <h1>Your Cart is Empty</h1>
            <p>Discover crystals, rudraksha, vastu products and more for your spiritual journey.</p>
            <Link to="/shop" className={styles.btnPrimary}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link to="/">
            <FiArrowLeft /> Home
          </Link>
          <span>/</span>
          <span>View Cart</span>
        </nav>

        <header className={styles.pageHeader}>
          <h1>View Cart</h1>
          <p>
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.cartItems}>
            <div className={styles.cartHeader}>
              <span>Product</span>
              <span>Price</span>
              <span>Qty</span>
              <span>Total</span>
              <span aria-hidden="true" />
            </div>

            {cartItems.map((item) => {
              const unitPrice = item.discountPrice || item.price;
              return (
                <article key={item.id} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <Link to={`/product/${item.slug}`} className={styles.itemImage}>
                      <ProductImage src={item.images[0]} alt={item.title} />
                    </Link>
                    <div>
                      <Link to={`/product/${item.slug}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p className={styles.itemId}>ID: {item.id}</p>
                      <p className={styles.category}>{item.category}</p>
                    </div>
                  </div>

                  <span className={styles.price} data-label="Price">
                    ₹{unitPrice}
                  </span>

                  <div className={styles.quantity} data-label="Quantity">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <FiMinus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>

                  <span className={styles.itemTotal} data-label="Total">
                    ₹{unitPrice * item.quantity}
                  </span>

                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </article>
              );
            })}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.summary}>
              <h2>Order Summary</h2>
              <div className={styles.summaryRow}>
                <span>Subtotal ({itemCount} items)</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span className={styles.free}>Free</span>
              </div>
              <div className={styles.divider} />
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <a
                href={getWhatsAppLink(cartItems)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.checkoutBtn}
              >
                <FaWhatsapp size={20} />
                Proceed to Order on WhatsApp
              </a>

              <Link to="/shop" className={styles.continueShopping}>
                Continue Shopping
              </Link>

              <button type="button" className={styles.clearCartBtn} onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
