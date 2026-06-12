const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'data', 'products', 'devta-divs.json');

try {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    console.error('Unexpected JSON structure: expected an array');
    process.exit(1);
  }
  data.forEach(item => {
    item.price = 599;
    item.discountPrice = 399;
  });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated ${data.length} items in ${filePath}`);
} catch (err) {
  console.error('Error updating prices:', err.message);
  process.exit(1);
}
