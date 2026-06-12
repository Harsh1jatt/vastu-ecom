import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from '../context/CartContext';
import { WishlistProvider } from '../context/WishlistContext';
import { ToastProvider } from '../context/ToastContext';
import Layout from '../layouts/Layout';
import Homepage from '../pages/Homepage';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import CategoryPage from '../pages/CategoryPage';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Terms from '../pages/Terms';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Refundpolicy from '../pages/Refundpolicy.jsx';
import {
  Blogs,
  FAQ,
  ShippingPolicy,
  NotFound,
} from '../pages';
import ScrollToTopOnRouteChange from '../components/common/ScrollToTopOnRouteChange';
import PrivacyPolicy from '../pages/PrivacyPolicy';
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/:category" element={<CategoryPage />} />

          <Route
            path="/:category/:subcategory"
            element={<CategoryPage />}
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/view-cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

<Route
  path="/services/:slug"
  element={<ServiceDetails />}
/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/return" element={<Refundpolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppRoutes() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <CartProvider>
        <WishlistProvider>
          <ToastProvider>
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </ToastProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default AppRoutes;
