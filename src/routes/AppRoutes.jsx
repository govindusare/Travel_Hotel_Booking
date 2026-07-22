import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/about/AboutPage'
import ServicesPage from '../pages/services/ServicesPage'
import ContactPage from '../pages/contact/ContactPage'
import AuthPage from '../pages/auth/AuthPage'
import SearchResultsPage from '../pages/hotels/SearchResultsPage'
import HotelDetailsPage from '../pages/hotels/HotelDetailsPage'
import BookingPage from '../pages/booking/BookingPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/hotels" element={<SearchResultsPage />} />
      <Route path="/hotels/:hotelId" element={<HotelDetailsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  )
}

export default AppRoutes
