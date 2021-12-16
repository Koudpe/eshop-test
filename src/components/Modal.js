import React, { useContext } from "react";

import { CartContext } from "./../context/CartContext";
import Card from "./Card";

const Modal = ({ showModal, setShowModal, product }) => {
  const { products } = useContext(CartContext);
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
                    <Card product={product} key={product.id} />
                  ) : null}
                </div>
              );
            })}
            <h2>CELKEM:</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
