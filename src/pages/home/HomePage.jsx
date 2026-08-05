import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import AboutUs from './components/AboutUs'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <AboutUs />
      <PopularDestinations />
      <PromoBanner />
    </>
  )
}

export default HomePage
