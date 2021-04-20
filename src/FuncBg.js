import { useTheme, useThemeUpdater } from './DarkThemeContext'

export default function FuncBg() {
  const darkTheme = useTheme()
  const changeTheme = useThemeUpdater()

  const style = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    margin: '2rem',
    padding: '2rem',
  }

  return (
    <>
      <button onClick={changeTheme}>Toggle Dark Theme</button>
      <div style={style}>Function Component</div>
    </>
  )
}
