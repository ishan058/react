// src/utils/api.js

// Helper function to make API requests
export const apiRequest = async (url, method, body = null) => {
  const options = {
      method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
  };

  try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
  } catch (error) {
      console.error('API request error:', error);
      throw error; // Re-throw for handling in context
  }
};

// Login user
export const loginUser = async (credentials) => {
  return await apiRequest('/api/auth/login', 'POST', credentials);
};

// Register user
export const registerUser = async (userData) => {
  return await apiRequest('/api/auth/register', 'POST', userData);
};

// Fetch products
export const fetchProducts = async () => {
  return await apiRequest('/api/products', 'GET');
};

// Fetch orders
export const fetchOrders = async () => {
  return await apiRequest('/api/orders', 'GET');
};

// Fetch user profile by user ID
export const fetchUserProfile = async (userId) => {
  return await apiRequest(`/api/user/profile/${userId}`, 'GET');
};

// Update user profile
export const updateUserProfile = async (profile) => {
  return await apiRequest('/api/user/profile', 'PUT', profile);
};

// You can add additional API functions as needed.
