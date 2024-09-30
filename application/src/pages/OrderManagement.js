// src/pages/OrderManagement.js
import React from 'react';

const OrderManagement = () => {
    // Sample order data
    const orders = [
        { id: 1, user: 'John Doe', total: '$50', status: 'Shipped' },
        { id: 2, user: 'Jane Smith', total: '$75', status: 'Pending' },
    ];

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
                                <button>Cancel</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManagement;
