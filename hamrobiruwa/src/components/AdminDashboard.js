import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchOrders, fetchUsers } from '../api/adminApi';
import ProductTable from './ProductTable';
import OrderTable from './OrderTable';
import UserTable from './UserTable';
import useSocket from '../hooks/useSocket';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all data on component mount
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        const ordersData = await fetchOrders();
        const usersData = await fetchUsers();
        setProducts(productsData);
        setOrders(ordersData);
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  // Use the custom socket hook to handle real-time product updates
  useSocket((updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  });

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ProductTable products={products} />
      <OrderTable orders={orders} />
      <UserTable users={users} />
    </div>
  );
};

export default AdminDashboard;
