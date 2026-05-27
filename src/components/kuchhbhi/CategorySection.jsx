import CategoryCard from './CategoryCard'
import '../css/CategorySection.css'

function CategorySection({ categories }) {

  return (

    <section className="category-section">

      <div className="section-title">

        <span>Collections</span>

        <h2>
          Shop By Category
        </h2>

      </div>

      <div className="category-grid">

        {
          categories.map((item, index) => (
            <CategoryCard key={index} item={item} />
          ))
        }

      </div>

    </section>

  )
}

export default CategorySection