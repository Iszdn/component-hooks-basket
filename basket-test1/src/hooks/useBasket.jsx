import React, { useEffect, useState } from 'react'

function useBasket() {
    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
    useEffect(() => {
      localStorage.setItem("basket",JSON.stringify(basket))
     }, [basket])
     function handleBasket(item) {
        const elementIndex=basket.findIndex(x=>x.id===item.id)
       if (elementIndex !== -1) {
        const newBasket=[...basket]
        newBasket[elementIndex].count++
        setBasket(newBasket)
       }
       else{
        setBasket([...basket,{...item,count:1}])
       }
      }
      function handleDelete(id) {
        setBasket(basket.filter(x=> x.id!==id))
      }
      function handleCountVal(isAdd,item) {
        const elementIndex=basket.findIndex(x=>x.id===item.id)
        const newBasket=[...basket]
        if (isAdd) {
           newBasket[elementIndex].count++
        setBasket(newBasket)
        }
       else{
        if(newBasket[elementIndex].count===1){
      return
        }
        newBasket[elementIndex].count--
        setBasket(newBasket)
       }
      }
  return {basket,setBasket,handleBasket,handleDelete,handleCountVal}
}

export default useBasket