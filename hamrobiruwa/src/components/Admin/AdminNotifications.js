// src/components/AdminNotifications.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Your server URL

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('newOrder', (order) => {
      setNotifications((prev) => [...prev, `New order from ${order.user}`]);
    });

    return () => {
      socket.off('newOrder');
    };
  }, []);

  return (
    <div className="admin-notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminNotifications;
