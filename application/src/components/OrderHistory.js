// src/components/OrderHistory.js
import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
    const orders = useSelector(state => state.orders);

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>Order ID: {order.id}, Total: ${order.total}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
