import { useContext, useState } from 'react'
import { BtnColorContext } from './App'

export default function CounterFunc({ initialCount }) {
  const [count, setCount] = useState(() => initialCount)
  const style = useContext(BtnColorContext)

  const changeCount = (amount) => setCount((prevCount) => prevCount + amount)

  return (
    <div>
      <button style={style} onClick={() => changeCount(-1)}>
        -
      </button>
      <span>{count}</span>
      <button style={style} onClick={() => changeCount(1)}>
        +
      </button>
    </div>
  )
}
