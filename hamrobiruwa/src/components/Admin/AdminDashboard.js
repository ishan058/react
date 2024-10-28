import React, { useEffect, useState } from 'react';
import { fetchDashboardData, fetchProducts, fetchOrders, fetchUsers } from '../api/api';
import ProductTable from './ProductTable';
import OrderTable from './OrderTable';
import UserTable from './UserTable';
import useSocket from '../hooks/useSocket';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardMetrics = await fetchDashboardData();
        const productsData = await fetchProducts();
        const ordersData = await fetchOrders();
        const usersData = await fetchUsers();

        setDashboardData(dashboardMetrics);
        setProducts(productsData);
        setOrders(ordersData);
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  // Use custom socket hook to handle real-time product updates
  useSocket((updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  });

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      {/* Display dashboard metrics */}
      {dashboardData && (
        <div className="dashboard-metrics">
          <div className="metric">
            <h2>Total Sales</h2>
            <p>{dashboardData.totalSales}</p>
          </div>
          <div className="metric">
            <h2>Orders Today</h2>
            <p>{dashboardData.ordersToday}</p>
          </div>
          <div className="metric">
            <h2>Customer Growth</h2>
            <p>{dashboardData.newCustomers}</p>
          </div>
        </div>
      )}

      {/* Render tables for products, orders, and users */}
      <ProductTable products={products} />
      <OrderTable orders={orders} />
      <UserTable users={users} />
    </div>
  );
};

export default AdminDashboard;
