import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';  // Correct import path

const Cart = () => {
  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice}</h2>
    </div>
  );
};

export default Cart;
