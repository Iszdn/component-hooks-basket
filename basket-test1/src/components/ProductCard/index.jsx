import React from 'react'

function ProductCard({item,addBasket}) {
    const {id,name}=item
  return (
        <ul style={{border:"2px solid green",padding:"10px",listStyle:"none"}} >
  <li>{name}</li>
  <li>{id}</li>
  <button onClick={()=>addBasket(item)}>add</button>
</ul>
  )
}

export default ProductCard