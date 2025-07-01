import { useEffect, useState, useRef } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'


function App() {
  const[state, setState] = useState(0)
  const ref = useRef(0);

function handleClick(){
  ref.current = ref.current + 1;
  console.log('ref click: ' +ref.current);
}

  return (<>
<button onClick={handleClick}>
  state click: {ref.current}
</button>
<p>text</p>
<button>click</button>
    </>
  )
}

export default App
