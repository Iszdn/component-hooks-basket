import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './components/ProductCard';
import BasketCard from './components/BasketCard';
import MyProducts from './components/MyProducts';
import useBasket from './hooks/useBasket';

function App() {
  
  const {basket,setBasket,handleBasket,handleDelete,handleCountVal}=useBasket()

  return (
    <div>
<h3>umumi hisse</h3>
<button>basket popunu ac</button>

<div style={{border:"1px solid black"}}>
<h3>basket</h3>

{
  basket && basket.map((x)=>(
   
   <BasketCard key={uuidv4()} item={x}  handleCountVal={handleCountVal} handleDelete={handleDelete}  />
    
  ))
}
</div>
<MyProducts handleBasket={handleBasket}/>
    
    </div>
  )
}

export default App
