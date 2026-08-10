import FAQSection from '../services/components/FAQSection'
import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import AboutUs from './components/AboutUs'
import Footer from "../../components/layout/Footer"; //rohan
import TourGuide from './components/TourGuide'
import OurPackages from './components/OurPackages'
  
import GallerySection from './components/gallerySection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <AboutUs />
      <PromoBanner />
      <OurPackages />
      <GallerySection/>
      <TourGuide/>
      <PopularDestinations />
      <FAQSection />
      <Footer />      
    </>
  )
}

export default HomePage
