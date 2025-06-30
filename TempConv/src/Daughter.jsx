import React, { useContext } from 'react'
import Grandson from './Grandson'
import { MyContext } from './MyContext'

const Daughter = () => {

       const age = useContext(MyContext);
  return (<>
 {age}
<Grandson/>
</>
  )
}

export default Daughter