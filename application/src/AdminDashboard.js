import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch products, orders, and users from the backend API
    fetchProducts();
    fetchOrders();
    fetchUsers();
  }, []);

  const fetchProducts = async () => {
    // API call to get all products
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  };

  const fetchOrders = async () => {
    // API call to get all orders
    const response = await fetch('/api/orders');
    const data = await response.json();
    setOrders(data);
  };

  const fetchUsers = async () => {
    // API call to get all users
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const deleteProduct = async (id) => {
    // API call to delete a product
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Products</h2>
        <button onClick={() => /* logic to open add product modal */}>Add Product</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
              <button onClick={() => /* logic to open edit product modal */}>Edit</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - Status: {order.status}
              <button onClick={() => /* logic to update order status */}>Update Status</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.email}
              <button onClick={() => /* logic to delete user */}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
