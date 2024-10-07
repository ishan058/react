import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../utils/api';
import '../styles/OrderHistory.css';

const OrderHistory = ({ userId }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrders = async () => {
            const userOrders = await fetchOrders(userId);
            setOrders(userOrders);
        };
        loadOrders();
    }, [userId]);

    return (
        <div className="order-history">
            <h1>Your Order History</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            <p>Order ID: {order.id}</p>
                            <p>Product: {order.productName}</p>
                            <p>Status: {order.status}</p>
                            <p>Total: ${order.total}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderHistory;
