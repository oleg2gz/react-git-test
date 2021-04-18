import { useState } from 'react'

export default function CounterFunc({ initialCount }) {
  const [count, setCount] = useState(() => initialCount)

  const changeCount = (amount) => setCount((prevCount) => prevCount + amount)

  return (
    <div>
      <button onClick={() => changeCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
    </div>
  )
}
