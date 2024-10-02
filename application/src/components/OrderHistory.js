// src/components/OrderHistory.js
import React, { useEffect, useState } from 'react';
import { fetchOrderHistory } from '../api'; // Import the correct function
import '../styles/OrderHistory.css';

const OrderHistory = ({ userId }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOrderHistory = async () => {
            const orderData = await fetchOrderHistory(userId);
            setOrders(orderData);
            setLoading(false);
        };
        getOrderHistory();
    }, [userId]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="order-history">
            <h2>Your Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <h3>Order ID: {order.id}</h3>
                        <p>Status: {order.status}</p>
                        <p>Total: ${order.total}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
