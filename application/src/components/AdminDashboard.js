import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../utils/api'; // Adjust import

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
            <p>Order ID: {order.id}</p>
            <p>Amount: {order.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
