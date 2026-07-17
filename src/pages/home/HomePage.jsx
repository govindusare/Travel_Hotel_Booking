import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <PopularDestinations />
      <PromoBanner />
    </>
  )
}

export default HomePage
