import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartBadge.css';

const CartBadge = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-badge">
      <span>{cartItems.length}</span>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartBadge;
