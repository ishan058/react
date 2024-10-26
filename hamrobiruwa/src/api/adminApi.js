import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/admin';

// Fetch products
export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

// Fetch orders
export const fetchOrders = async () => {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
};

// Fetch users
export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

// Delete a user
export const deleteUser = async (userId) => {
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    return response.data;
};

// Similar functions for updating product, order status, etc.
