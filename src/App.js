import { createContext, useState } from 'react'
import CounterClass from './CounterClass'
import CounterFunc from './CounterFunc'

export const BtnColorContext = createContext()

function App() {
  const [color, setColor] = useState(() => 'red')

  const changeColor = () => {
    setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
  }

  return (
    <BtnColorContext.Provider value={{ background: color }}>
      <h3>Class Component</h3>
      <CounterClass initialCount={0} />
      <h3>Function Component</h3>
      <CounterFunc initialCount={0} />
      <h3>Context API</h3>
      <button onClick={changeColor}>Buttons Color</button>
    </BtnColorContext.Provider>
  )
}

export default App
