import React from "react";

import CardList from "./CardList";
import CartContextProvider from "../context/CartContext";
import "../index.css";

const App = () => {
  return (
    <CartContextProvider>
    <div className='App'>
      <div className='card-wrapper'>
        <CardList />
      </div>
    </div>
    </CartContextProvider>
  );
};

export default App;
