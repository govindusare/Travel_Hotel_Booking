import BenefitsSection from './components/BenefitsSection'
import FAQSection from './components/FAQSection'
import ServiceCard from './components/ServiceCard'

function ServicesPage() {
  return (
    <>
      <h1>Services</h1>
      <ServiceCard title="Hotel Booking" description="Browse and reserve rooms." />
      <BenefitsSection />
      <FAQSection />
    </>
  )
}

export default ServicesPage
