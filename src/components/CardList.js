import React, { useContext, useState } from "react";

import Card from "./Card";
import Modal from "./Modal";
import { CartContext } from "./../context/CartContext";

import "../index.css";

const CardList = () => {
  const { products } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log("modal", showModal);
  };
  return (
    <div className='App'>
      <div className='button-wrapper'>
        <button className='cart-button-wrap'>
          <span className='cart-button' onClick={openModal}>
            Cart
          </span>
        </button>
      </div>

      <div className='card-wrapper'>
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default CardList;
