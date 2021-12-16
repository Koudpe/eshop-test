import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [products, setProducts] = useState([
    { name: "product1", price: 10, count: 0, id: 1 },
    { name: "product2", price: 20, count: 0, id: 2 },
    { name: "product3", price: 30, count: 0, id: 3 },
    { name: "product4", price: 40, count: 0, id: 4 },
    { name: "product5", price: 50, count: 0, id: 5 },
    { name: "product6", price: 60, count: 0, id: 6 },
  ]);

  const countPlus = (id) => {
    const newCount = [...products];
    newCount[id - 1].count++;
    setProducts(newCount);
  };

  const countMinus = (id) => {
    const newCount = [...products];
    newCount[id - 1].count--;
    setProducts(newCount);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        countPlus,
        countMinus,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;