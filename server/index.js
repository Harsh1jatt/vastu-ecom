import express from "express";
import compression from "compression";
import fs from "fs";
import path from "path";
import { getProduct } from "./productLoader.js";

const app = express();

app.use(compression());

const DIST = path.join(process.cwd(), "dist");

app.use(express.static(DIST));

const indexHTML = fs.readFileSync(
    path.join(DIST, "index.html"),
    "utf8"
);

app.get("/product/:slug", (req, res) => {

    const product = getProduct(req.params.slug);

    if (!product) {

        return res.send(indexHTML);

    }

    const title = product.title;

    const description = product.shortDescription;

    const image = `https://www.vastudivine.in${product.images[0]}`;

    const url = `https://www.vastudivine.in/product/${product.slug}`;

    const html = indexHTML.replace(
        "</head>",
        `

<title>${title}</title>

<meta property="og:title" content="${title}">

<meta property="og:description" content="${description}">

<meta property="og:image" content="${image}">

<meta property="og:url" content="${url}">

<meta property="og:type" content="product">

<meta name="twitter:card" content="summary_large_image">

<meta name="twitter:title" content="${title}">

<meta name="twitter:description" content="${description}">

<meta name="twitter:image" content="${image}">

</head>
`
    );

    res.send(html);

});

app.get("*", (_, res) => {

    res.send(indexHTML);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Running on ${PORT}`);

});