// src/pages/OrderHistory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/orders/history', {
        headers: { Authorization: token },
      });
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h2>Order ID: {order._id}</h2>
            <p>Total Amount: ${order.totalAmount}</p>
            <p>Status: {order.status}</p>
            <h3>Items:</h3>
            <ul>
              {order.items.map(item => (
                <li key={item.productId._id}>
                  {item.productId.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
