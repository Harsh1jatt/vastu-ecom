import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import ScrollToTop from '../components/common/ScrollToTop';
import Toast from '../components/common/Toast';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={`${styles.main} ${!isHome ? styles.mainPadded : ''}`}>
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Toast />
    </div>
  );
};

export default Layout;
