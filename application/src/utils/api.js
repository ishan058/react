// src/utils/api.js

// Example of API request function
export const apiRequest = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error; // Re-throw for handling in context
  }
};

// Define loginUser function
export const loginUser = async (credentials) => {
  return await apiRequest('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
};

// Define registerUser function
export const registerUser = async (userData) => {
  return await apiRequest('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// Other API functions...
export const fetchProducts = async () => {
  return await apiRequest('/api/products');
};

export const fetchOrders = async () => {
  return await apiRequest('/api/orders');
};
