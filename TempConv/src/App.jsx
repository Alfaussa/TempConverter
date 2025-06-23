import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[name, setName] = useState('')
  const [color, setColor] = useState('grey')
  
  // useEffect(()=>{
  //   document.body.style.backgroundColor = color;
  //   window.addEventListener('keydown', handleEnter);

  //   return(() => {
  //     window.removeEventListener('keydown', handleEnter);
  //   }
  //   )
  // }, [color])
  useEffect(()=>{
    localStorage.setItem('name', name)
  }, [name])

  useEffect(()=>{
    const myDiv = document.getElementById('myDivId');
    myDiv.style.backgroundColor = color;
    document.addEventListener('click', changeColor);
    return(()=>{
      document.removeEventListener('click', changeColor);
    })
  }, [color])

  function changeColor(){
    setColor('red');
  }
color
  function handleEnter(event){
    if(event.keyCode === 13){
      setColor('red')
    }
  }
  
  return (<>
<div id='myDivId'style={{width:'200px', height:'200px'}}></div>
<button onClick={changeColor}></button>
<input onChange={(e)=>setName(e.target.value)}></input>
    </>
  )
}

export default App
