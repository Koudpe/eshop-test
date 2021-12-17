import React, { useContext } from "react";
import Button from '@mui/material/Button';

import { CartContext } from "./../context/CartContext";
import Card from '@mui/material/Card';

const CardX = ({
  product,
  product: { count },
  product: { id },
  product: { name },
  product: { price },
}) => {
  const { countPlus, countMinus, cart, setCart } = useContext(CartContext);
  const decrement = () => {
    if (count >= 1) {
      countMinus(id);
    }
  };

  const increment = () => {
    countPlus(id);
    const newCartItem = { name: product.name, price: product.price };
    setCart((curr) => [...curr, newCartItem]);
  };

  return (
    <div className='card-wrap'>
      <Card className='card'>
        <div>
          <p>Název: {name}</p>
          <p>Cena: {price}</p>
          <p>ID: {id}</p>
          <p>Cena celkem: {price * count}</p>
        </div>
        <div className='center'>
          <div className='row'>
            <Button variant="contained" onClick={decrement}>-</Button>
            <p>{count}</p>
            <Button variant="contained" onClick={increment}>+</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardX;
