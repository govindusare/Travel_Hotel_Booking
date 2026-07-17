function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__brand">Hotel Booking</a>
      <nav className="navbar__links" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/hotels">Hotels</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
