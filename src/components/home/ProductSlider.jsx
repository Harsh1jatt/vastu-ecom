import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../products/ProductCard';
import { getFeaturedProducts } from '../../utils/productUtils';
import styles from './ProductSlider.module.css';

const ProductSlider = ({ title = 'Trending Now', products, subtitle }) => {
  const items = products?.length ? products : getFeaturedProducts().slice(0, 10);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Discover"
          title={title}
          subtitle={subtitle || 'Handpicked spiritual essentials loved by our community.'}
        />
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.15}
          centeredSlides={false}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className={styles.swiper}
        >
          {items.map((product, i) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlider;
