import React from 'react'
import { memo } from 'react';
function Products ({addProduct, products}) {


  const list = products.map((product, index)=>{
    return <p key={index}>{product}</p>

  });
  console.log('рендер')
  return (<>
    <button onClick={addProduct}> add</button>
    {list}
  </>)
}

export default Products