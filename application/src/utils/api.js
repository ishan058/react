// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

// Centralized API fetcher function
const fetcher = async (endpoint, method = 'GET', body = {}, headers = {}) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${endpoint}`,
      data: body,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

// Define specific API methods for your components
export const fetchProducts = () => fetcher('/products');
export const fetchUsers = () => fetcher('/users');
export const fetchOrders = () => fetcher('/orders');
export const fetchUserById = (id) => fetcher(`/users/${id}`);
export const createProduct = (product) => fetcher('/products', 'POST', product);
export const deleteProduct = (id) => fetcher(`/products/${id}`, 'DELETE');
export const updateProduct = (id, product) => fetcher(`/products/${id}`, 'PUT', product);
export const loginUser = (credentials) => fetcher('/auth/login', 'POST', credentials);
export const registerUser = (userInfo) => fetcher('/auth/register', 'POST', userInfo);
export const updateUserProfile = (id, profile) => fetcher(`/users/${id}`, 'PUT', profile);

// Add missing functions for Wishlist and Admin operations
export const fetchAdminProducts = () => fetcher('/admin/products'); // For Admin Products
export const fetchUserProfile = (userId) => fetcher(`/users/${userId}/profile`); // For User Profile
export const fetchWishlist = (userId) => fetcher(`/users/${userId}/wishlist`); // For Wishlist
export const removeFromWishlist = (userId, productId) =>
  fetcher(`/users/${userId}/wishlist/${productId}`, 'DELETE');
