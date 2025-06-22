import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[color, setColor] = useState('green')

  useEffect(()=>{
    document.body.style.backgroundColor = color;
  }, [color])
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
  
  function changeColor(){
    setColor('orange');
  }
  return (<>
<p>Градус Цельсия</p>
<input type='number' value={userInput.c} onChange={handleClick1}></input>
<p>Градус Фаренгейта</p>
<input type='number' value={userInput.f} onChange={handleClick2}></input>
<button onClick={changeColor}></button>
    </>
  )
}

export default App
