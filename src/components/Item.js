import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [itemClass, setItemClass] = useState('');

  function HandleAddCart(){
    setItemClass((prevClass)=>
      prevClass === ''? 'in-cart': ''
    )
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={HandleAddCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
