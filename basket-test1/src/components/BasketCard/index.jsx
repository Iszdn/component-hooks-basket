import React from "react";

function BasketCard({item, handleCountVal,handleDelete}) {
  const {id,name,count}=item
  return (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
      <li>say:{count}</li>
      <button onClick={() => handleCountVal(true,item)}>+</button>
      <button onClick={() => handleCountVal(false, item)}>-</button>
      <button onClick={() => handleDelete(id)}>del</button>
    </ul>
  );
}

export default BasketCard;
