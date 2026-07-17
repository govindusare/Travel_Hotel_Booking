function HotelCard({ hotel }) {
  return (
    <article className="hotel-card">
      <h3>{hotel?.name ?? 'Hotel name'}</h3>
      <p>{hotel?.location ?? 'Location'}</p>
    </article>
  )
}

export default HotelCard
