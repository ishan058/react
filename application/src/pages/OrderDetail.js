// src/pages/OrderDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from '../api';
import '../styles/OrderDetail.css';

const OrderDetail = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOrder = async () => {
            const orderData = await fetchOrderById(orderId);
            setOrder(orderData);
            setLoading(false);
        };
        getOrder();
    }, [orderId]);

    if (loading) return <p>Loading...</p>;
    if (!order) return <p>No order found.</p>;

    return (
        <div className="order-detail">
            <h2>Order Details</h2>
            <p>Order ID: {order.id}</p>
            <p>User: {order.userName}</p>
            <p>Total: ${order.total}</p>
            <h3>Products:</h3>
            <ul>
                {order.products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderDetail;
