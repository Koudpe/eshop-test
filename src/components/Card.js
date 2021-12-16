import React, { useContext } from "react";

import { CartContext } from "./../context/CartContext";

const Card = ({ product }) => {
  const { countPlus, countMinus } = useContext(CartContext);
  const decrement = () => {
    if (product.count >= 1) {
      countMinus(product.id);
    }
  };

  const increment = () => {
    countPlus(product.id);
  };

  return (
    <div className='card-wrap'>
      <div className='card'>
        <div>
          <p>Název: {product.name}</p>
          <p>Cena: {product.price}</p>
          <p>ID: {product.id}</p>
          <p>Cena celkem: {product.price * product.count}</p>
        </div>
        <div className='center'>
          <div className='row'>
            <button onClick={decrement}>-</button>
            <p>{product.count}</p>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
