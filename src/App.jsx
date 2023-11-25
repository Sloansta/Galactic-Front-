import GamePage from "./pages/GamePage"
import Homepage from "./pages/Homepage"
import { useState, useEffect } from "react"

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  const handleGameToggle = () => {
      setGameStarted(!gameStarted)
  }
  
  useEffect(() => {
    console.log(gameStarted)
  }, [gameStarted])

  return (
    <>
      {!gameStarted ? (
        <Homepage handleGameToggle={handleGameToggle}/>
      ) : (<GamePage onExit={handleGameToggle}/>)}
    </>
  )
}

export default App
