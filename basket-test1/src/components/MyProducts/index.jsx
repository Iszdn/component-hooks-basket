import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../ProductCard';

function MyProducts({handleBasket }) {
    const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)


async function getProducts() {
  const data=await fetch("https://northwind.vercel.app/api/products")
  const res=await data.json()
  setProducts(res)
  setIsLoading(false)
}
useEffect(() => {
  getProducts()
}, [])
  return (
    <>
 {
  isLoading ? <p>Loading...</p> : 
  <>
  {  products && products.map((x)=>(
<ProductCard key={uuidv4()} item={x} addBasket={handleBasket}/>
    ))}
  </>
}

  </>
  )
}

export default MyProducts