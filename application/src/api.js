// src/api.js
const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

// Fetch all users
export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Fetch all orders
export const fetchOrders = async () => {
    const response = await fetch(`${API_URL}/orders`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Fetch all products for users
export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Fetch admin products
export const fetchAdminProducts = async () => {
    const response = await fetch(`${API_URL}/admin/products`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Fetch a user's profile by user ID
export const fetchUserProfile = async (userId) => {
    const response = await fetch(`${API_URL}/users/${userId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Update a user's profile
export const updateUserProfile = async (userId, userData) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to update user profile');
    }
    return response.json();
};

// Fetch order history for a user by user ID
export const fetchOrderHistory = async (userId) => {
    const response = await fetch(`${API_URL}/users/${userId}/orders`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
