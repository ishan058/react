import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Price: ${totalPrice}</h3>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
