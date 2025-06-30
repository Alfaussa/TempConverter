import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const Grandson = () => {

const sonAge = +useContext(MyContext)/2;

  return (<>
  {sonAge}
 </>
)
}

export default Grandson