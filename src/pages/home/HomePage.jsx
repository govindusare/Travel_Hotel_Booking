import FeaturedHotels from './components/FeaturedHotels'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import PromoBanner from './components/PromoBanner'
import DiscountsOffers from "./components/DiscountsOffers";
import TourCategories from  "./components/TourCategories";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedHotels />
      <PopularDestinations />
      <PromoBanner />
      <DiscountsOffers />
     <TourCategories/>
    </>
  )
}

export default HomePage
