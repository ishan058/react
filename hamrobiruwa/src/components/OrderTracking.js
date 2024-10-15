// src/components/OrderTracking.js
import React, { useState, useEffect } from 'react';
import { fetchOrderStatus } from '../api';
import './styles.css';

const OrderTracking = ({ orderId }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadStatus = async () => {
      const orderStatus = await fetchOrderStatus(orderId);
      setStatus(orderStatus);
    };
    loadStatus();
  }, [orderId]);

  return (
    <div className="order-tracking">
      <h2>Order Status</h2>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderTracking;
