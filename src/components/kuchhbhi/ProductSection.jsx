import ProductCard from './ProductCard.jsx'
import '../css/ProductSection.css'

function ProductSection({ products }) {

  return (

    <section className="product-section">

      <div className="section-title">

        <span>Trending</span>

        <h2>
          Best Selling Products
        </h2>

      </div>

      <div className="product-grid">

        {
          products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))
          
        }

      </div>

    </section>

  )
}

export default ProductSection