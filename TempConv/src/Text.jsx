import React from 'react'
import { memo } from 'react'

export const Text = memo(() => {
    console.log('text render')
  return (
    <div>long text</div>
    
  )
})
