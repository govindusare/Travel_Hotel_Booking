import FAQSection from '../services/components/FAQSection'
import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import TourGuide from './components/TourGuide'
import OurPackages from './components/OurPackages'


function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <OurPackages />
      <TourGuide/>
      <PopularDestinations />
      <FAQSection />
      <PromoBanner />
      
    </>
  )
}

export default HomePage
