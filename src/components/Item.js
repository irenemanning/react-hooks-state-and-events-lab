import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)
  const liClass = inCart ? "" : "in-cart"
  function addToCart() {
    setInCart(!inCart)
  }
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
