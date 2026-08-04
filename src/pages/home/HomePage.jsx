import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import Testimonials from './components/Testimonials'
import TourGuide from './components/TourGuide'
import GallerySection from './components/gallerySection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <TourGuide/>
      <PopularDestinations />
      <Testimonials />
      <PromoBanner />
      <GallerySection/>
  </>
  )
}

export default HomePage
