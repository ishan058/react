import React from 'react';
import '../styles/Checkout.css';

const Checkout = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-summary">
                {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <span>{item.name}</span>
                        <span>{item.quantity} x ${item.price}</span>
                    </div>
                ))}
                <div className="total">
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
