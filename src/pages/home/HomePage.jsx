import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import TourGuide from './components/TourGuide'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <TourGuide/>
      <PopularDestinations />
      <PromoBanner />
    </>
  )
}

export default HomePage
