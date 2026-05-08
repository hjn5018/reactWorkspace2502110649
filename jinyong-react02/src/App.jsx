import { useState } from 'react'
import Controller from './sub/Controller'
import Viewer from './sub/Viewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Simple Counter</h1>

    <section style={{backgroundColor: "#eeeeee", width: 600, height: 150, margin: 10, padding: 20}}>
      <Viewer count={count}/>
    </section>

    <section style={{backgroundColor: "#eeeeee", width: 600, height: 150, margin: 10, padding: 20}}>
      <Controller count={count}/>
    </section>
    </>
  )
}

export default App
