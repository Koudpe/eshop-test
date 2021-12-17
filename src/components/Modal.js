import React, { useContext } from "react";

import { CartContext } from "./../context/CartContext";
import CardX from "./Card";

const Modal = ({ showModal, setShowModal, product }) => {
  const { products, cart, setCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const closeModal = () => {
    setShowModal();
  };

  return (
    <div>
      {showModal ? (
        <div className='modal-position'>
          <div className='modal-wrap'>
            <span className='modal-cross-wrap' onClick={closeModal}>
              <span className='modal-cross'></span>
            </span>
            {products.map((product) => {
              return (
                <div className='card-cart'>
                  {product.count ? (
                    <CardX product={product} key={product.id} />
                  ) : null}
                </div>
              );
            })}
            <h2>CELKEM: {totalPrice}</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
