// src/pages/OrderManagement.js
import React, { useState } from 'react';
import '../styles/Admin.css';

const OrderManagement = () => {
    const [orders, setOrders] = useState([
        { id: 1, user: 'John Doe', total: '$50', status: 'Shipped' },
        { id: 2, user: 'Jane Smith', total: '$75', status: 'Pending' },
    ]);

    const handleCancel = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    return (
        <div className="order-management">
            <h2>Order Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.user}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                            <td>
                                <button>View</button>
                                <button onClick={() => handleCancel(order.id)}>Cancel</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManagement;
