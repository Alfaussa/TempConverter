import { useEffect, useState, useRef, useMemo } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'
import { Text } from './Text';
import Child from './Child';
import Items from './Items';
import { useCallback } from 'react';
import Products from './Products';


function App() {
const [name, setName] = useState('');
const [surn, setSurn] = useState('');
const [num, setNum] = useState(0);
const [items, setItems] = useState([]);
const [text, setText] = useState('1text')
const [products, setProducts] = useState([])


const addItem =useCallback(()=>{
setItems([...items, 'new item']);
}, [items])
	


const addProducts = useCallback(()=>{
  setProducts([...products,'новый продукт'])
},[products]);


  return (<>
	<div>
		<label>
			name:
			<input value={name} onChange={(e) => setName(e.target.value)} /> 
		</label>
		<br />
	<Text/>
    <Child name={name} />
	</div>
  <div>
		<button onClick={() => setNum(num 
			+ 1)}>click</button> 
		<p>clicks: {num}</p>
	</div>
  <Items
  items={items}
  addItem={addItem}
  />

  <p onClick={()=>setText(text + '')}>{text}</p>
  <Products
  addProduct={addProducts}
  products={products}/>
  
  </>
  
    
  )
}

export default App
