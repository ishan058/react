// src/utils/api.js

const BASE_URL = 'https://api.yoursite.com'; // Example API URL

const request = async (url, method = 'GET', body = null, headers = {}) => {
  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const options = { method, headers: { 'Content-Type': 'application/json', ...headers } };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  const response = await fetch(`${BASE_URL}${url}`, options);
  
  if (!response.ok) {
    throw new Error('API request failed');
  }
  
  return await response.json();
};

export const fetchProducts = () => request('/products');
export const fetchUserProfile = () => request('/user/profile');
export const updateUserProfile = (data) => request('/user/profile', 'PUT', data);
export const loginUser = (data) => request('/auth/login', 'POST', data);
export const registerUser = (data) => request('/auth/register', 'POST', data);
export const fetchOrders = () => request('/orders'); // Add fetchOrders API call
