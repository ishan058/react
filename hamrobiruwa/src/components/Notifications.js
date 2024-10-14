// src/components/Notifications.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('newOrder', (data) => {
      setNotifications((prev) => [...prev, data.message]);
    });

    return () => {
      socket.off('newOrder');
    };
  }, []);

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
