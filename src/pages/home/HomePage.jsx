import FeaturedHotels from './components/FeaturedHotels'
import Navbar from "../../components/layout/Navbar.jsx";
import HeroSection from './components/HeroSection.jsx'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import TourGuide from './components/TourGuide'

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedHotels />
      <TourGuide/>
      <PopularDestinations />
      <PromoBanner />
    </>
  )
}

export default HomePage
