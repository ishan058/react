// src/components/OrderHistory.js
import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
    const orders = useSelector((state) => state.orders);

    return (
        <div>
            <h2>Order History</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index}>
                        <h3>Order #{index + 1}</h3>
                        {order.items.map(item => (
                            <div key={item.id}>
                                <p>{item.name} - ${item.price}</p>
                            </div>
                        ))}
                        <h4>Total: ${order.total}</h4>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderHistory;
