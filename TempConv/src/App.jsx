import { useEffect, useState, useRef } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'


function App() {
  const[state, setState] = useState('')
  const ref = useRef(0);

function handleClick(){
 setState(state + '!')
}

  return (<>
<button >
  state click: {ref.current}
</button>
<p>text{state}</p>
<button onClick={handleClick}>click</button>
    </>
  )
}

export default App
