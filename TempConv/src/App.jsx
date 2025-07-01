import { useEffect, useState, useRef } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'


function App() {
  const[state, setState] = useState('')
  const ref = useRef('');

function handleClick(){
ref.current.focus()
ref.current.value = '';
}

  return (<>
	<div>
		<input value={state} onChange={(e)=>setState(e.target.value)} ref={ref}/>
		<button onClick={handleClick}>focus</button>
	</div>
    </>
  )
}

export default App
