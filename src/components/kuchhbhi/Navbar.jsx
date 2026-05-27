import { useState } from 'react'
import '../css/Navbar.css'

function Navbar() {

  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)

  const categories = [
    {
      title: 'Vastu',
      products: [
        'Brass Pyramid',
        'Vastu Yantra',
        'Copper Swastik',
        'Energy Plate'
      ]
    },

    {
      title: 'Bracelets',
      products: [
        'Tiger Eye Bracelet',
        '7 Chakra Bracelet',
        'Rose Quartz Bracelet',
        'Black Obsidian'
      ]
    },

    {
      title: 'Crystals',
      products: [
        'Healing Crystal',
        'Crystal Tree',
        'Amethyst Stone',
        'Crystal Turtle'
      ]
    },

    {
      title: 'Rudraksha',
      products: [
        '5 Mukhi Rudraksha',
        '7 Mukhi Rudraksha',
        'Rudraksha Mala',
        'Nepali Rudraksha'
      ]
    },

    {
      title: 'Oils',
      products: [
        'Lavender Oil',
        'Rose Oil',
        'Sandalwood Oil',
        'Healing Aroma Oil'
      ]
    }
  ]

  return (
    <header className="navbar">

      <div className="logo">
        VASTU<span>VARDAN</span>
      </div>

      {/* DESKTOP NAV */}

      <nav className="nav-links">

        <a href="/">Home</a>

        {
          categories.map((category, index) => (

            <div
              className="nav-dropdown"
              key={index}
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              <button
                className="nav-dropdown-btn"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === index ? null : index
                  )
                }
              >
                {category.title}

                <i className="fa-solid fa-chevron-down"></i>
              </button>

              <div
                className={`dropdown-menu ${
                  activeDropdown === index ? 'active' : ''
                }`}
              >

                {
                  category.products.map((item, i) => (

                    <a href="/" key={i}>
                      {item}
                    </a>

                  ))
                }

              </div>

            </div>

          ))
        }

        <a href="/">Blogs</a>

      </nav>

      {/* RIGHT ACTIONS */}

      <div className="nav-actions">

        <button className="icon-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <button className="icon-btn cart-btn">
          <i className="fa-solid fa-bag-shopping"></i>
          <span>2</span>
        </button>

        {/* MOBILE MENU BTN */}

        <button
          className="menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <i
            className={
              mobileMenu
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }
          ></i>
        </button>

      </div>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${mobileMenu ? 'show' : ''}`}>

        <a href="/">Home</a>

        {
          categories.map((category, index) => (

            <div className="mobile-dropdown" key={index}>

              <button
                className="mobile-dropdown-btn"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === index ? null : index
                  )
                }
              >
                <span>{category.title}</span>

                <i
                  className={`fa-solid fa-chevron-down ${
                    activeDropdown === index ? 'rotate' : ''
                  }`}
                ></i>
              </button>

              <div
                className={`mobile-dropdown-menu ${
                  activeDropdown === index ? 'open' : ''
                }`}
              >

                {
                  category.products.map((item, i) => (

                    <a href="/" key={i}>
                      {item}
                    </a>

                  ))
                }

              </div>

            </div>

          ))
        }

        <a href="/">Blogs</a>

      </div>

    </header>
  )
}

export default Navbar