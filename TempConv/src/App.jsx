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
 ref.current = ref.current + '!'
 console.log(ref.current)
}

  return (<>
<button >
  state click: {ref.current}
</button>
<p>text{ref.current}</p>
<button onClick={handleClick}>click</button>
    </>
  )
}

export default App
