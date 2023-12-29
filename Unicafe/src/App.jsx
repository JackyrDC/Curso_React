import { useState } from 'react'
import Button from './Buttons'
import Stats from './Stats'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function setGoods() {
    const newGood = good + 1
    setGood(newGood)
  }

  function setNeutrals() {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  function setBads() {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (  
    <div>
      <h1>Rate Us</h1>
      <div>
        <Button handler={() => setGoods()} text='Good' />

        <Button handler={() => setNeutrals()} text='Neutrals' />

        <Button handler={() => setBads()} text='Bads' />
      </div>
      <Stats goods={good} bads={bad} neutrals={neutral}/>
    </div>
  )
}

export default App
