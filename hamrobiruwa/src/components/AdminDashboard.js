// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { fetchDashboardData } from '../api/api';
import ProductTable from './ProductTable';
import SalesChart from './SalesChart'; // New component to display sales chart
import OrdersOverview from './OrdersOverview'; // New component to display recent orders

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDashboardData();
      setDashboardData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {dashboardData ? (
        <>
          {/* Sales and product statistics */}
          <div className="stats-overview">
            <div className="stat-item">
              <h2>Total Sales</h2>
              <p>{dashboardData.totalSales}</p>
            </div>
            <div className="stat-item">
              <h2>Products Sold</h2>
              <p>{dashboardData.productsSold}</p>
            </div>
          </div>

          {/* Sales Chart */}
          <SalesChart salesData={dashboardData.salesData} />

          {/* Recent Orders */}
          <OrdersOverview orders={dashboardData.recentOrders} />

          {/* Manage Products */}
          <h2>Manage Products</h2>
          <ProductTable products={dashboardData.products} />
        </>
      ) : (
        <p>Loading dashboard data...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
