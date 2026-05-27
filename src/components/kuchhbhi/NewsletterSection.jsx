import '../css/NewsletterSection.css'

function NewsletterSection() {

  return (

    <section className="newsletter">

      <div className="newsletter-content">

        <span>Newsletter</span>

        <h2>
          Get Spiritual Tips &
          Exclusive Offers
        </h2>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>

  )
}

export default NewsletterSection