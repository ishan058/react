import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../utils/api';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const fetchedOrders = await fetchOrders();
      setOrders(fetchedOrders);
    };
    loadOrders();
  }, []);

  return (
    <div className="container">
      <h2 className="header">Admin Dashboard</h2>
      <div className="card">
        <h3>Orders List</h3>
        <ul>
          {orders.map(order => (
            <li key={order.id}>{order.productName} - {order.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
