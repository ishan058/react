// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchOrders } from '../api'; // Mock API calls
import { useAuth } from '../AuthContext';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await fetchUsers();
            const ordersData = await fetchOrders();
            setUsers(usersData);
            setOrders(ordersData);
        };
        fetchData();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Welcome, {user?.email}!</h1>
            <div className="stats">
                <div className="card">
                    <h2>Users</h2>
                    <p>{users.length}</p>
                </div>
                <div className="card">
                    <h2>Orders</h2>
                    <p>{orders.length}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
