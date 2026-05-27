import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import ProductSection from '../components/ProductSection'
import AboutSection from '../components/AboutSection'
import NewsletterSection from '../components/NewsletterSection'

function Homepage() {

  const categories = [
    {
      title: 'Vastu',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f'
    },

    {
      title: 'Bracelets',
      image:
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638'
    },

    {
      title: 'Crystals',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15'
    },

    {
      title: 'Rudraksha',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    }
  ]

  const products = [
    {
      title: '7 Chakra Bracelet',
      price: '₹799',
      image:
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638'
    },

    {
      title: 'Crystal Tree',
      price: '₹1499',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15'
    },

    {
      title: 'Brass Pyramid',
      price: '₹999',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f'
    },

    {
      title: 'Healing Oil',
      price: '₹599',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15'
    }
  ]

  return (
    <>
      <HeroSection />

      <CategorySection categories={categories} />

      <ProductSection products={products} />

      <AboutSection />

      <NewsletterSection />
    </>
  )
}

export default Homepage