import { useEffect, useState, useRef, useMemo } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'

import Child from './Child';


function App() {
const [name, setName] = useState('');
const [surn, setSurn] = useState('');

  
  return (<>
	<div>
		<label>
			name:
			<input value={name} onChange={(e) => setName(e.target.value)} /> 
		</label>
		<br />
		<label>
			surname:
			<input value={surn} onChange={(e) => setSurn(e.target.value)} /> 
		</label>
    <Child name={name} />
	</div>
    </>
  )
}

export default App
