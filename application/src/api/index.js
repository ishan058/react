// src/api/index.js
export const fetchUsers = async () => {
    const response = await fetch('/api/users'); // Update with your actual API endpoint
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); // Adjust based on your API response structure
};

export const fetchOrders = async () => {
    const response = await fetch('/api/orders'); // Update with your actual API endpoint
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); // Adjust based on your API response structure
};

export const fetchProducts = async () => {
    const response = await fetch('/api/products'); // Update with your actual API endpoint
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); // Adjust based on your API response structure
};
