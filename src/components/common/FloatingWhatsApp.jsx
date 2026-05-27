import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';
import { getWhatsAppLink } from '../../utils/helpers';

const FloatingWhatsApp = () => {
  const { cartItems } = useCart();
  const href = getWhatsAppLink(cartItems);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
