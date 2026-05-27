import { useState } from 'react';
import styles from './ProductImage.module.css';

const ProductImage = ({ src, alt, className = '' }) => {
  const [error, setError] = useState(false);
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(alt || 'product')}/600/600`;
// console.log('Rendering ProductImage with src:', src, 'and alt:', alt);
  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={`${styles.img} ${className}`}
      loading="lazy"
      onError={() => setError(true)}

    />
    
  );
};

export default ProductImage;
