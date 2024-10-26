// src/components/AdminNotifications.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust to your backend server

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('orderUpdate', (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    return () => {
      socket.off('orderUpdate');
    };
  }, []);

  return (
    <div className="admin-notifications">
      <h2>Admin Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminNotifications;
