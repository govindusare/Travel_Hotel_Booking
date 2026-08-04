import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import Footer from "../../components/layout/Footer"; //rohan
import TourGuide from './components/TourGuide'
import GallerySection from './components/gallerySection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <TourGuide/>
      <PopularDestinations />
      <PromoBanner />
      <GallerySection/>
      <Footer />
    </>
  )
}

export default HomePage
