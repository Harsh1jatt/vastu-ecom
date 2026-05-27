import '../css/AboutSection.css'

function AboutSection() {

  return (

    <section className="about-section">

      <div className="about-image">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="about"
        />

      </div>

      <div className="about-content">

        <span>About Us</span>

        <h2>
          Bringing Harmony &
          Spiritual Wellness
        </h2>

        <p>
          We deliver carefully selected spiritual
          products designed to improve positivity,
          peace and prosperity in everyday life.
        </p>

        <button>
          Learn More
        </button>

      </div>

    </section>

  )
}

export default AboutSection