import { useEffect, useState } from 'react'
// import { MyContext } from './MyContext';
//import BigBox from './BigBox';
import './styles.css';
import './App.css'


function App() {
  // const[name, setName] = useState('')
  // const [color, setColor] = useState('grey')
  const[isVisible, setIsVisibility] = useState(false);
  
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
    event.stopPropagation()
    setIsVisibility(!isVisible);
  }
  function closeBlock(event){

    event.preventDefault();
    setIsVisibility(false);
  }
  return (<>
{/* <div id='myDivId'style={{width:'200px', height:'200px'}}></div>
<button onClick={changeColor}></button> */}
{/* <input onChange={(e)=>setName(e.target.value)}></input> */}
<a href='#' onClick={handleBlock}>sylka</a>
{block}
{/* <MyContext.Provider value="small 
			box :)"> 
			<BigBox />
		</MyContext.Provider> */}
    </>
  )
}

export default App
