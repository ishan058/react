// src/components/OrdersTable.js
import React from 'react';

const OrdersTable = ({ orders }) => {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customerName}</td>
            <td>{order.status}</td>
            <td>{order.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
