import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[name, setName] = useState('')
  const [color, setColor] = useState('orange')
    useEffect(()=>{
    document.body.style.color = color;
    window.addEventListener('keydown', handleEnter);

    return(() => {
      window.removeEventListener('keydown', handleEnter);
    }
    )

  }, [color])
  useEffect(()=>{
    localStorage.setItem('name', name)
  }, [name])


  
  
  function changeColor(){
    setColor('red');
  }

  function handleEnter(event){
    if(event.keyCode === 13){
      setColor('red')
    }
  }
  return (<>

<button onClick={changeColor}></button>
<input onChange={(e)=>setName(e.target.value)}></input>
    </>
  )
}

export default App
