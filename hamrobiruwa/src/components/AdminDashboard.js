import React, { useState, useEffect } from 'react';
import { fetchDashboardData, deleteProduct } from '../api/api';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const getDashboardData = async () => {
      const data = await fetchDashboardData();
      setDashboardData(data);
    };
    getDashboardData();
  }, []);

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    // Re-fetch data to update dashboard after deletion
    const updatedData = await fetchDashboardData();
    setDashboardData(updatedData);
  };

  if (!dashboardData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="statistics">
        <p>Total Products: {dashboardData.totalProducts}</p>
        <p>Total Sales: {dashboardData.totalSales}</p>
        <p>Total Users: {dashboardData.totalUsers}</p>
      </div>

      <div className="product-list">
        <h3>Manage Products</h3>
        {dashboardData.products.map((product) => (
          <div key={product.id} className="product-item">
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
