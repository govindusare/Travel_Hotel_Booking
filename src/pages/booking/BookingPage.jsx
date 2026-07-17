import GuestDetailsForm from './components/GuestDetailsForm'
import PaymentForm from './components/PaymentForm'
import SummaryCard from './components/SummaryCard'

function BookingPage() {
  return (
    <>
      <h1>Complete Booking</h1>
      <GuestDetailsForm />
      <PaymentForm />
      <SummaryCard />
    </>
  )
}

export default BookingPage
