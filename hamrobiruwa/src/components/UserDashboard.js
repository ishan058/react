import React, { useState, useEffect } from 'react';
import { fetchOrderHistory, fetchWishlist } from '../api/api';

const UserDashboard = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const orders = await fetchOrderHistory();
      const wishlistItems = await fetchWishlist();
      setOrderHistory(orders);
      setWishlist(wishlistItems);
    };

    fetchData();
  }, []);

  return (
    <div className="user-dashboard">
      <h2>Your Dashboard</h2>

      <div className="order-history">
        <h3>Order History</h3>
        {orderHistory.map((order) => (
          <div key={order.id}>
            <p>Order #{order.id}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))}
      </div>

      <div className="wishlist">
        <h3>Your Wishlist</h3>
        {wishlist.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
