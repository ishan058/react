import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Fetch user data and order history from the backend
    fetchUser();
    fetchOrderHistory();
  }, []);

  const fetchUser = async () => {
    // API call to get user details
    const response = await fetch('/api/user');
    const data = await response.json();
    setUser(data);
  };

  const fetchOrderHistory = async () => {
    // API call to get user order history
    const response = await fetch('/api/user/orders');
    const data = await response.json();
    setOrderHistory(data);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    // API call to update user profile
    await fetch('/api/user', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    alert('Profile updated successfully');
  };

  return (
    <div className="profile">
      <h1>Your Profile</h1>
      <form onSubmit={updateProfile}>
        <input
          type="text"
          name="name"
          value={user.name || ''}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={user.email || ''}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <button type="submit">Update Profile</button>
      </form>

      <h2>Order History</h2>
      <ul>
        {orderHistory.map((order) => (
          <li key={order.id}>
            Order #{order.id} - Status: {order.status} - Total: ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
