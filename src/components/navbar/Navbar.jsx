import { useState, useEffect, useMemo } from 'react';

import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiChevronDown,
} from 'react-icons/fi';

import { useCart } from '../../hooks/useCart';

import SearchBar from '../common/SearchBar';

import products from '../../data/products/';

import styles from './Navbar.module.css';



// =========================
// SLUGIFY
// ADD THIS HERE
// =========================

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\u0900-\u097Fa-z0-9-]/g, '');

export const unslugify = (text) =>
  decodeURIComponent(text)
    .replace(/-/g, ' ')
    .trim();
// =========================
// MENU CONFIG
// =========================

// =========================
// MENU CONFIG
// =========================

const mainMenus = {
  vastu: [
    'Strips',
    'Tapes',
    'Helix',
    'Springs',
    'Studs',
    'Pyramids',
    'Kilak',
    'Rods',
    'Resin Articles',
    'Devta Divs',
    'Shakti Chakra',
    'Compass',
  ],

  yantra: [
    'दैवीय यंत्र',
    'शिक्षा यंत्र',
    'सुरक्षा यंत्र',
    'व्यापार यंत्र',
    'ग्रह यंत्र',
    'धन यंत्र',
    'सुरक्षा लॉकेट',
    'धन लॉकेट',
    'माता जी लॉकेट',
    'व्यापार लॉकेट',
  ],

  energyvastu: [
    'Brahmbooster',
    'Foundation Remedy',
    'Blocker',
    'Shield',
    'Opener',
    'Zone Remedy',
    'Direction Booster',
    'Balancer',
    'Protector',
  ],
  oils: [
    'Essential Oils',
    'Aroma Oils',
    'Therapy Oils',
    'Religious Oils',
    'Vastu Oils',
  ],
};



const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [activeDropdown, setActiveDropdown] =
    useState(null);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const { getTotalItems } = useCart();

  const cartCount = getTotalItems();



  // =========================
  // DYNAMIC MENU ITEMS
  // =========================
  const menuItems = useMemo(() => {
    return Object.entries(mainMenus).map(
      ([menuSlug, allowedCategories]) => {
        let filteredProducts = [];
        let categories = [];

        if (
          menuSlug === 'yantra' ||
          menuSlug === 'oils' ||
          menuSlug === 'energyvastu'
        ) {
          filteredProducts = products.filter(
            (product) =>
              allowedCategories.includes(
                product.subcategory
              )
          );

          categories = [
            ...new Set(
              filteredProducts.map(
                (product) => product.subcategory
              )
            ),
          ];
        } else if (menuSlug === 'oils') {
          filteredProducts = products.filter(
            (product) => product.category === 'Oils'
          );

          categories = [
            ...new Set(
              filteredProducts.map(
                (product) => product.subcategory
              )
            ),
          ];
        }
        else {
          filteredProducts = products.filter(
            (product) =>
              allowedCategories.includes(
                product.category
              )
          );

          categories = [
            ...new Set(
              filteredProducts.map(
                (product) => product.category
              )
            ),
          ];
        }

        return {
          title:
            menuSlug.charAt(0).toUpperCase() +
            menuSlug.slice(1),
          slug: menuSlug,
          categories,
        };
      }
    );
  }, []);



  // =========================
  // BODY SCROLL LOCK
  // =========================

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);



  // =========================
  // CLOSE MENU ON ROUTE CHANGE
  // =========================

  useEffect(() => {
    setMobileOpen(false);

    setActiveDropdown(null);
  }, [location.pathname]);



  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.inner}>
            {/* LOGO */}

            <Link to="/" className={styles.logo}>
              <img
                src="/logo.png"
                alt="logo"
              />
            </Link>



            {/* DESKTOP MENU */}

            <div className={styles.centerNav}>
              <NavLink
                to="/"
                end
                className={styles.navLink}
              >
                Home
              </NavLink>

              {menuItems.map((item) => (
                <div
                  key={item.slug}
                  className={styles.dropdownWrap}
                  onMouseEnter={() =>
                    setActiveDropdown(item.slug)
                  }
                  onMouseLeave={() =>
                    setActiveDropdown(null)
                  }
                >
                  <NavLink
                    to={`/${item.slug}`}
                    className={styles.navLink}
                  >
                    {item.title}

                    <FiChevronDown
                      className={`${styles.chevron} ${activeDropdown === item.slug
                        ? styles.chevronOpen
                        : ''
                        }`}
                    />
                  </NavLink>

                  <AnimatePresence>
                    {activeDropdown === item.slug && (
                      <motion.div
                        className={styles.dropdown}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <div
                          className={
                            styles.dropdownInner
                          }
                        >
                          {item.categories.map(
                            (category) => (
                              <Link
                                key={category}
                                to={`/${item.slug}/${slugify(
                                  category
                                )}`}
                                className={
                                  styles.dropdownItem
                                }
                              >
                                {category}
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <NavLink
                to="/gemstones"
                className={styles.navLink}
              >
                Gemstones
              </NavLink>
            </div>



            {/* ACTIONS */}

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() =>
                  setSearchOpen(true)
                }
              >
                <FiSearch />
              </button>
              <Link
                to="/cart"
                className={styles.iconBtn}
              >
                <FiShoppingCart />

                {cartCount > 0 && (
                  <span className={styles.badge}>
                    {cartCount}
                  </span>
                )}
              </Link>



              {/* MOBILE BUTTON */}

              <button
                className={styles.hamburger}
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
              >
                {mobileOpen ? (
                  <FiX size={24} />
                ) : (
                  <FiMenu size={24} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>



      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setMobileOpen(false)
              }
            />

            <motion.aside
              className={styles.mobileDrawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 320,
              }}
            >
              <div className={styles.drawerHead}>
                <img
                  src="/logo.png"
                  alt="logo"
                />

                <button
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className={styles.drawerNav}>
                <NavLink
                  to="/"
                  end
                  className={styles.drawerLink}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  Home
                </NavLink>

                {menuItems.map((item) => (
                  <div key={item.slug}>
                    <button
                      type="button"
                      className={
                        styles.drawerLink
                      }
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown ===
                            item.slug
                            ? null
                            : item.slug
                        )
                      }
                    >
                      {item.title}

                      <FiChevronDown
                        className={
                          activeDropdown ===
                            item.slug
                            ? styles.chevronOpen
                            : ''
                        }
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown ===
                        item.slug && (
                          <motion.div
                            className={
                              styles.drawerSub
                            }
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: 'auto',
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                          >
                            {item.categories.map(
                              (category) => (
                                <Link
                                  key={category}
                                  to={`/${item.slug}/${slugify(
                                    category
                                  )}`}
                                  className={
                                    styles.drawerSubItem
                                  }
                                  onClick={() =>
                                    setMobileOpen(
                                      false
                                    )
                                  }
                                >
                                  {category}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}
                <NavLink
                  to="/gemstones"
                  className={styles.navLink}
                >
                  Gemstones
                </NavLink>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>



      <SearchBar
        isOpen={searchOpen}
        onClose={() =>
          setSearchOpen(false)
        }
      />
    </>
  );
};

export default Navbar;