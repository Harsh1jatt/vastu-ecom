import fs from 'fs';
import path from 'path';

const productsDir = './src/data/products';
const servicesFile = './src/data/services/services.json';

const urls = new Set();

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/faq',
  '/privacy-policy',
  '/terms',
  '/shipping',
  '/return',
];

staticRoutes.forEach(route => urls.add(route));

// Services
const services = JSON.parse(
  fs.readFileSync(servicesFile, 'utf8')
);

services.forEach(service => {
  urls.add(`/services/${service.slug}`);
});

// Products
const files = fs.readdirSync(productsDir);

files.forEach(file => {
  if (!file.endsWith('.json')) return;

  const data = JSON.parse(
    fs.readFileSync(
      path.join(productsDir, file),
      'utf8'
    )
  );

  data.forEach(product => {
    if (product.slug) {
      urls.add(`/product/${product.slug}`);
    }

    if (product.category) {
      const category = product.category
        .toLowerCase()
        .replace(/\s+/g, '-');

      urls.add(`/${category}`);

      if (product.subcategory) {
        const subcategory = product.subcategory
          .toLowerCase()
          .replace(/\s+/g, '-');

        urls.add(
          `/${category}/${subcategory}`
        );
      }
    }
  });
});

fs.writeFileSync(
  './generated-urls.txt',
  [...urls].sort().join('\n')
);

console.log(
  `✅ Generated ${urls.size} URLs`
);