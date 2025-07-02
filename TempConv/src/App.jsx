import { useEffect, useState, useRef, useMemo } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'


function App() {
  const[isGreen, setIsGreen] = useState(false);
  const[num, setNum]= useState(0);
  const ref = useRef('');

function handleClick(){
ref.current.focus()
ref.current.value = '';
}
const result = useMemo(()=>square(num), [num])
function square(num) {
	let startTime = performance.now();
	
	while (performance.now() - startTime 
		< 500) { 
		// Just do nothing ...
	}
	
	return num * num;
}
  return (<>
	<div>
		<h3 onClick={()=>setIsGreen(!isGreen)}style={{color:isGreen ? 'green':'orangered'}}>Text</h3>
		<button onClick={()=>setNum(num + 1)}>click:{result}</button>
	</div>
    </>
  )
}

export default App
