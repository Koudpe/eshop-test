import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";

import CardX from "./Card";
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
        <Button variant='contained' onClick={openModal}>
          <span>Cart</span>
        </Button>
      </div>

      <div className='card-wrapper'>
        {products.map((product) => {
          return <CardX product={product} key={product.id} />;
        })}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default CardList;
