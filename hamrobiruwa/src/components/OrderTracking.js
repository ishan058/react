// src/components/OrderTracking.js
import React, { useState, useEffect } from 'react';

const OrderTracking = ({ orderId }) => {
  const [orderStatus, setOrderStatus] = useState('Pending');
  const [shipmentStatus, setShipmentStatus] = useState('');

  useEffect(() => {
    const fetchOrderStatus = async () => {
      const response = await fetch(`/api/order/status?orderId=${orderId}`);
      const data = await response.json();
      setOrderStatus(data.status);
      setShipmentStatus(data.shipmentStatus);
    };

    fetchOrderStatus();
  }, [orderId]);

  return (
    <div className="order-tracking">
      <h3>Order Tracking</h3>
      <p>Order Status: {orderStatus}</p>
      {shipmentStatus && <p>Shipment Status: {shipmentStatus}</p>}
    </div>
  );
};

export default OrderTracking;
