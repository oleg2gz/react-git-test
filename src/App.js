import CounterClass from './CounterClass'
import CounterFunc from './CounterFunc'

function App() {
  return (
    <>
      <h3>Class Component</h3>
      <CounterClass initialCount={0} />
      <h3>Function Component</h3>
      <CounterFunc initialCount={0} />
    </>
  )
}

export default App
