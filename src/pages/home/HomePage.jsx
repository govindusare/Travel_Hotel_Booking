import FAQSection from '../services/components/FAQSection'
import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import Footer from "../../components/layout/Footer"; //rohan
import TourGuide from './components/TourGuide'
import OurPackages from './components/OurPackages'
  
import GallerySection from './components/gallerySection'
import DiscountsOffers from './components/Discount&Offers'
import TourCategories from './components/TourCategories'

function HomePage() {
  return (
    <>
      <HeroSection />
      <DiscountsOffers />
      <TourCategories/>
      <FeaturedHotels />
      <OurPackages />
      <TourGuide/>
      <PopularDestinations />
      <FAQSection />
      <PromoBanner />

      <GallerySection/>
      <Footer />
    </>
  )
}

export default HomePage
