import { useState } from "react"


function App() {

  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <ToggleMassage /><br />
      <ToggleMassage /><br />
      <ToggleMassage /><br />
      <ToggleMassage /><br />

    </div>
  )
}

function ToggleMassage() {
  const [incrementCount, setIncrementCount] = useState(0)

  function increment() {
    setIncrementCount(incrementCount + 1)
  }

  return (
    <div >
      <button style={{ height: 200, width: 200, borderRadius: 100, fontSize: 30 }} onClick={increment}>
        increment coint is  <span style={{color:"red"}}>{incrementCount}</span>
      </button>
      
    </div>
  )
}



export default App
