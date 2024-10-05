// src/utils/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Replace with your backend API URL

// Function to fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products');
    }
};

// Function to fetch a single product by ID
export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching product with ID: ${productId}`);
    }
};

// Function to create a new product
export const createProduct = async (productData) => {
    try {
        const response = await axios.post(`${BASE_URL}/products`, productData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating product');
    }
};

// Function to update an existing product by ID
export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/products/${productId}`, updatedData);
        return response.data;
    } catch (error) {
        throw new Error(`Error updating product with ID: ${productId}`);
    }
};

// Function to delete a product by ID
export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error deleting product with ID: ${productId}`);
    }
};

// Function to fetch all users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

// Function to fetch a single user by ID
export const fetchUserById = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching user with ID: ${userId}`);
    }
};

// Function to update a user's profile
export const updateUserProfile = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        throw new Error(`Error updating profile for user with ID: ${userId}`);
    }
};

// Function to fetch all orders
export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching orders');
    }
};

// Function to fetch a single order by ID
export const fetchOrderById = async (orderId) => {
    try {
        const response = await axios.get(`${BASE_URL}/orders/${orderId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching order with ID: ${orderId}`);
    }
};

// Function to create a new order
export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${BASE_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating order');
    }
};

// Function to update an order status by ID
export const updateOrderStatus = async (orderId, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/orders/${orderId}`, updatedData);
        return response.data;
    } catch (error) {
        throw new Error(`Error updating order with ID: ${orderId}`);
    }
};

// Function to delete an order by ID
export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/orders/${orderId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error deleting order with ID: ${orderId}`);
    }
};

// Function to handle user registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error('Error registering user');
    }
};

// Function to handle user login
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, loginData);
        return response.data;
    } catch (error) {
        throw new Error('Error logging in');
    }
};

// Function to handle password recovery
export const recoverPassword = async (email) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/recover-password`, { email });
        return response.data;
    } catch (error) {
        throw new Error('Error recovering password');
    }
};

