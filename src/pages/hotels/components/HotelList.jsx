import HotelCard from './HotelCard'

function HotelList({ hotels = [] }) {
  return (
    <section className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </section>
  )
}

export default HotelList
