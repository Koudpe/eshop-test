import React, { useContext } from "react";

import { CartContext } from "./../context/CartContext";

const Card = ({ product, product:{count}, product:{id}, product:{name}, product:{price} }) => {
  const { countPlus, countMinus } = useContext(CartContext);
  const decrement = () => {
    if (count >= 1) {
      countMinus(id);
    }
  };

  const increment = () => {
    countPlus(id);
  };

  return (
    <div className='card-wrap'>
      <div className='card'>
        <div>
          <p>Název: {name}</p>
          <p>Cena: {price}</p>
          <p>ID: {id}</p>
          <p>Cena celkem: {price * count}</p>
        </div>
        <div className='center'>
          <div className='row'>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
