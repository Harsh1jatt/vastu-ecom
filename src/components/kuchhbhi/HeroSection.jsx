import '../css/HeroSection.css'

function HeroSection() {

  return (

    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          Premium Spiritual Collection
        </span>

        <h1>
          Create Positive Energy
          In Your Space
        </h1>

        <p>
          Discover vastu products, healing crystals,
          bracelets and spiritual essentials crafted
          for peace and prosperity.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Shop Now
          </button>

          <button className="outline-btn">
            Explore
          </button>

        </div>

      </div>

    </section>

  )
}

export default HeroSection