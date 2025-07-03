import React from 'react'

import { memo } from 'react'

const Child = memo(function Child({name}) {
       console.log('child render')
  return (

    
    <h3>hello {name}!</h3>
  )
})

Child.propTypes = {}

export default Child