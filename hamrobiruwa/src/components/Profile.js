// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { fetchOrders } from '../api';
import '../App.css';

const Profile = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      const userOrders = await fetchOrders(); // API call to get orders of the logged-in user
      setOrders(userOrders);
    };
    fetchUserOrders();
  }, []);

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <h3>Order History</h3>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Total: ${order.total}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Profile;
