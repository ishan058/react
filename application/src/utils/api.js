// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.yourapp.com';

// Define common API endpoints for reuse
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchUserProfile = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const updateUserProfile = async (userId, profileData) => {
  const response = await axios.put(`${API_BASE_URL}/users/${userId}`, profileData);
  return response.data;
};
