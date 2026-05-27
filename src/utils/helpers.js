import { WHATSAPP_NUMBER } from '../config/site';

export const generateWhatsAppMessage = (cartItems) => {
  if (!cartItems || cartItems.length === 0) {
    return encodeURIComponent(
      'Hello! I would like to know more about your spiritual products.'
    );
  }

  let message = 'Hello, I want to order these products:\n\n';

  cartItems.forEach((item, index) => {
    const price = item.discountPrice || item.price;
    message += `${index + 1}.\n`;
    message += `Product Name: ${item.title}\n`;
    message += `Product ID: ${item.id}\n`;
    message += `Category: ${item.category}\n`;
    message += `Quantity: ${item.quantity}\n`;
    message += `Price: ₹${price}\n\n`;
  });

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.discountPrice || item.price) * item.quantity;
  }, 0);

  message += `Total Amount: ₹${totalAmount}\n\n`;
  message += 'Please confirm availability.';

  return encodeURIComponent(message);
};

export const generateSingleProductWhatsAppMessage = (product, quantity = 1) => {
  const price = product.discountPrice || product.price;
  const message =
    `Hello, I want to order this product:\n\n` +
    `Product Name: ${product.title}\n` +
    `Product ID: ${product.id}\n` +
    `Category: ${product.category}\n` +
    `Quantity: ${quantity}\n` +
    `Price: ₹${price * quantity}\n\n` +
    `Please confirm availability.`;
  return encodeURIComponent(message);
};

export const getWhatsAppLink = (cartItems, phoneNumber = WHATSAPP_NUMBER) => {
  const message = generateWhatsAppMessage(cartItems);
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const getBuyNowWhatsAppLink = (product, quantity = 1, phoneNumber = WHATSAPP_NUMBER) => {
  const message = generateSingleProductWhatsAppMessage(product, quantity);
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

export const getDiscountPercentage = (originalPrice, discountPrice) => {
  if (!discountPrice || discountPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
};

export const formatRating = (rating) => rating.toFixed(1);
