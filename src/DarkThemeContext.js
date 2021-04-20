import { createContext, useContext, useState } from 'react'

const DarkThemeContext = createContext()
const DarkThemeUpdater = createContext()

export function useTheme() {
  return useContext(DarkThemeContext)
}

export function useThemeUpdater() {
  return useContext(DarkThemeUpdater)
}

export function DarkThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(() => false)

  const changeTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme)
  }

  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <DarkThemeUpdater.Provider value={changeTheme}>
        {children}
      </DarkThemeUpdater.Provider>
    </DarkThemeContext.Provider>
  )
}
