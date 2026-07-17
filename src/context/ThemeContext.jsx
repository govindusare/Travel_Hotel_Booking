import { createContext, useContext } from 'react'

const ThemeContext = createContext('light')

export function ThemeProvider({ children, value = 'light' }) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
