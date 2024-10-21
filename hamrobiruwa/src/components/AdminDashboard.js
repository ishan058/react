// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { fetchOrders, fetchProductStatistics, connectWebSocket } from '../api/api';
import OrdersTable from './OrdersTable';
import ProductStats from './ProductStats';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [productStats, setProductStats] = useState({});
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const ordersData = await fetchOrders();
      setOrders(ordersData);
    };

    const loadProductStats = async () => {
      const statsData = await fetchProductStatistics();
      setProductStats(statsData);
    };

    const ws = connectWebSocket();
    ws.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      setNotifications((prev) => [...prev, notification]);
    };

    loadOrders();
    loadProductStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="notifications">
        {notifications.map((notification, index) => (
          <p key={index}>{notification.message}</p>
        ))}
      </div>
      <div className="stats-overview">
        <ProductStats data={productStats} />
      </div>
      <div className="orders-section">
        <h2>Recent Orders</h2>
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
};

export default AdminDashboard;
