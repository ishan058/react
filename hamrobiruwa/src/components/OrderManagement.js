import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import io from 'socket.io-client';
import { fetchOrders, updateOrderStatus } from '../api/api';

const socket = io();

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const { data, isLoading, error, refetch } = useQuery('orders', fetchOrders, {
    onSuccess: (data) => setOrders(data.data),
  });

  useEffect(() => {
    // Listen for real-time order status updates
    socket.on('orderStatusUpdate', ({ orderId, status }) => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status } : order
        )
      );
    });

    return () => {
      socket.off('orderStatusUpdate');
    };
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      refetch(); // Refresh orders to reflect the updated status in case of manual updates
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error loading orders</p>;

  return (
    <div>
      <h2>Order Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user.name}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleStatusChange(order.id, 'NewStatusHere')}>
                  Update Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
