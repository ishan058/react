import axios from 'axios';

const API_URL = 'https://your-api-url.com'; // Replace with actual API URL

export const fetchProductsAPI = () => {
  return axios.get(`${API_URL}/products`);
};

export const addProductAPI = (product) => {
  return axios.post(`${API_URL}/products`, product);
};

export const deleteProductAPI = (productId) => {
  return axios.delete(`${API_URL}/products/${productId}`);
};

export const loginAPI = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};
