import React, { createContext, useState } from 'react';

// Create a CartContext
export const CartContext = createContext();

// CartProvider to wrap around the components
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalPrice((prevPrice) => prevPrice + product.price);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const applyCoupon = (discount) => {
    setTotalPrice((prevPrice) => prevPrice * (1 - discount / 100));
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart, applyCoupon }}>
      {children}
    </CartContext.Provider>
  );
};
