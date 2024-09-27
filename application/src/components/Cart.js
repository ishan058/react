// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import '../styles/Cart.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (item) => {
        dispatch(removeFromCart(item.id));
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => handleRemove(item)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${totalAmount}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
