import { useEffect, useState } from 'react'
import { MyContext } from './MyContext';
import Parent from './Parent';
import BigBox from './BigBox';
import './styles.css';
import './App.css'


function App() {
  // const[name, setName] = useState('')
  // const [color, setColor] = useState('grey')
  const[isVisible, setIsVisibility] = useState(false);
  const [name, setName] = useState('small box');
  const[age, setAge] = useState('50');
  // useEffect(()=>{
  //   document.body.style.backgroundColor = color;
  //   window.addEventListener('keydown', handleEnter);

  //   return(() => {
  //     window.removeEventListener('keydown', handleEnter);
  //   }
  //   )
  // }, [color])
  // useEffect(()=>{
  //   localStorage.setItem('name', name)
  // }, [name])

  // useEffect(()=>{
  //   const myDiv = document.getElementById('myDivId');
  //   myDiv.style.backgroundColor = color;
  //   document.addEventListener('click', changeColor);
  //   return(()=>{
  //     document.removeEventListener('click', changeColor);
  //   })
  // }, [color])
let block;
if(isVisible){
  block = <div style={{
    width:'100px', 
    height:'100px', 
    backgroundColor:'purple'}}>я появился!</div> 
}
useEffect(() => {
{
 document.addEventListener('click', closeBlock);


 return() => {
 document.removeEventListener('click', closeBlock);
 }}}
, [])

//   function changeColor(){
//     setColor('red');
//   }
// color
//   function handleEnter(event){
//     if(event.keyCode === 13){
//       setColor('red')
//     }
//   }

 function handleBlock(event){
    event.preventDefault();
    setIsVisibility(!isVisible);
  }
  function closeBlock(event){
      event.preventDefault();
      const targetElement = event.target;
if(targetElement.id !== 'link'){

    setIsVisibility(false);}
  }

  const handleAge = () => {
    const newAge = +age/2;
    setAge(newAge)
  }
  return (<>
{/* <div id='myDivId'style={{width:'200px', height:'200px'}}></div>
<button onClick={changeColor}></button> */}
{/* <input onChange={(e)=>setName(e.target.value)}></input> */}
<a id='link' href='#' onClick={handleBlock}>sylka</a>
{block}
<MyContext.Provider value={name}> 
			<BigBox />
      <button onClick={()=>{setName('metal box')}}>click</button>
		</MyContext.Provider> 
    <MyContext.Provider value = {age}>
      <Parent/>
      <button onClick ={handleAge}>click age</button>
    </MyContext.Provider> 
    </>
  )
}

export default App
