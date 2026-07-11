import fs from "fs";
import path from "path";

const PRODUCTS_DIR = path.join(process.cwd(), "src", "data", "products");

let products = [];

const files = fs.readdirSync(PRODUCTS_DIR);

files.forEach(file => {
    if (!file.endsWith(".json")) return;

    const filePath = path.join(PRODUCTS_DIR, file);

    const json = JSON.parse(
        fs.readFileSync(filePath, "utf8")
    );

    products.push(...json);
});

export function getProduct(slug) {
    return products.find(p => p.slug === slug);
}