import { useState } from 'react'

import './App.css'

function App() {

  const [userInput, setUserInput] = useState({c:'', f:''})

  const handleClick1 = (event) => {
  setUserInput({
    c: event.target.value,
    f: (+event.target.value)*9/5 +32
  })

  }
  const handleClick2 = (event) => {
    setUserInput('')
  setUserInput({
    c: ((+event.target.value)-32)*5/9,
    f: event.target.value
  })
  }
  
  return (<>
<p>Градус Цельсия</p>
<input type='number' value={userInput.c} onChange={handleClick1}></input>
<p>Градус Фаренгейта</p>
<input type='number' value={userInput.f} onChange={handleClick2}></input>
    </>
  )
}

export default App
