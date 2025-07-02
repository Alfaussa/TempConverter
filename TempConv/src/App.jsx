import { useEffect, useState, useRef, useMemo } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'


function App() {
  const[text, setText] = useState('react');
  const[num, setNum] = useState(0);

  function triple(num){
    return num**3;
  }
  const result = useMemo(()=>triple(num), [num]) ;
  return (<>
	<div>
	<p onClick={()=>setText(text + "!")}>{text}</p>
  <p onClick={()=>setNum(num + 1)}>{result}</p>
	</div>
    </>
  )
}

export default App
