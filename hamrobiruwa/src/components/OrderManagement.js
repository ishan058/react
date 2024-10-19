import React from 'react';
import { useQuery } from 'react-query';
import { fetchOrders } from '../api/api';

const OrderManagement = () => {
  const { data: orders, isLoading, error } = useQuery('orders', fetchOrders);

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
          {orders.data.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user.name}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => updateOrderStatus(order.id)}>Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
