function HotelGallery({ images = [] }) {
  return (
    <section className="hotel-gallery">
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt ?? ''} />
      ))}
    </section>
  )
}

export default HotelGallery
