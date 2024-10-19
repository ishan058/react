// src/components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../api/api'; // Ensure this matches the export

const AdminDashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDashboardData = async () => {
            try {
                const data = await fetchDashboardData();
                setDashboardData(data);
            } catch (error) {
                setError(error.message);
            }
        };
        
        getDashboardData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!dashboardData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Total Products: {dashboardData.totalProducts}</p>
            <p>Total Orders: {dashboardData.totalOrders}</p>
            <p>Total Users: {dashboardData.totalUsers}</p>
            {/* Render other dashboard components or statistics here */}
        </div>
    );
};

export default AdminDashboard;
