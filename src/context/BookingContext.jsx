import { createContext, useContext } from 'react'

const BookingContext = createContext(null)

export function BookingProvider({ children, value = null }) {
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}
