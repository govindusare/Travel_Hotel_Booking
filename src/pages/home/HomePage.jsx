import FAQSection from "../services/components/FAQSection";
import FeaturedHotels from "./components/FeaturedHotels";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "./components/HeroSection";
import PopularDestinations from "./components/PopularDestinations";
import PromoBanner from "./components/PromoBanner";
import AboutUs from "./components/AboutUs";
import DiscountsOffers from "./components/DiscountsOffers";
import TourCategories from "./components/TourCategories";
import Footer from "../../components/layout/Footer";
import TourGuide from "./components/TourGuide";
import OurPackages from "./components/OurPackages";
import GallerySection from "./components/gallerySection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <DiscountsOffers />
      <TourCategories />
      <FeaturedHotels />      
      <PromoBanner />
      <OurPackages />
      <GallerySection />
      <TourGuide />
      <PopularDestinations />
      <FAQSection />
      <Footer />
    </>
  );
}
//this is all changes done by govind sir 
export default HomePage;