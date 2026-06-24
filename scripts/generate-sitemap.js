import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://vastudivine.in';

const productsDir = './src/data/products';
const servicesFile = './src/data/services/services.json';

const publicDir = './public';
const sitemapFile = './public/sitemap.xml';

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


// Static Routes
staticRoutes.forEach(route => {
    urls.add(route);
});


// =======================
// SERVICES
// =======================

if (fs.existsSync(servicesFile)) {

    const services = JSON.parse(
        fs.readFileSync(
            servicesFile,
            'utf8'
        )
    );


    services.forEach(service => {

        if (service.slug) {
            urls.add(
                `/services/${service.slug}`
            );
        }

    });

}


// =======================
// PRODUCTS
// =======================

if (fs.existsSync(productsDir)) {


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


            // Product Page

            if (product.slug) {

                urls.add(
                    `/product/${product.slug}`
                );

            }



            // Category

            if (product.category) {


                const category = product.category
                    .toLowerCase()
                    .replace(/\s+/g, '-');


                urls.add(
                    `/${category}`
                );



                // Subcategory

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


}



// =======================
// CREATE SITEMAP XML
// =======================


const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>

<urlset 
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">


${[...urls]
        .sort()
        .map(url => {


            return `
<url>

<loc>${BASE_URL}${url}</loc>

<changefreq>weekly</changefreq>

<priority>${url === '/' ? '1.0' : '0.8'}</priority>

</url>
`;

        })
        .join('')}


</urlset>
`;



// =======================
// CHECK PUBLIC FOLDER
// =======================


if (!fs.existsSync(publicDir)) {

    fs.mkdirSync(publicDir);

}



// =======================
// CREATE / UPDATE SITEMAP
// =======================


fs.writeFileSync(
    sitemapFile,
    sitemapXML,
    'utf8'
);



console.log(
    `✅ Sitemap generated successfully
📌 URLs: ${urls.size}
📁 Location: public/sitemap.xml`
);