import axios from 'axios';
import { useQuery } from 'react-query';

const API_URL = process.env.REACT_APP_API_URL || 'https://your-backend-api-url.com/api'; // Use .env variable or fallback URL

// Function to fetch dashboard data
export const fetchDashboardData = async () => {
    try {
        const response = await fetch(`${API_URL}/dashboard`);
        if (!response.ok) {
            throw new Error('Failed to fetch dashboard data');
        }
        const data = await response.json();
        return data; // Assume this returns an object with totalProducts, totalOrders, totalUsers
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error; // Re-throw the error to handle it in your component
    }
};

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Add a new product (for admin)
export const addProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productData);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Delete a product (for admin)
export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

// Fetch product details by ID
export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

// User login API
export const loginAPI = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

// Fetch Wishlist
export const fetchWishlist = async () => {
    try {
        const response = await axios.get(`${API_URL}/wishlist`);
        return response.data;
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        throw error;
    }
};

// Add to Wishlist
export const addToWishlist = async (productId) => {
    try {
        const response = await axios.post(`${API_URL}/wishlist`, { productId });
        return response.data;
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        throw error;
    }
};

// Remove from Wishlist
export const removeFromWishlist = async (productId) => {
    try {
        const response = await axios.delete(`${API_URL}/wishlist/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        throw error;
    }
};

// Submit Review
export const submitReview = async (productId, review) => {
    try {
        const response = await axios.post(`${API_URL}/products/${productId}/reviews`, { review });
        return response.data;
    } catch (error) {
        console.error('Error submitting review:', error);
        throw error;
    }
};

// Fetch Reviews
export const fetchReviews = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

// Fetch filtered products
const fetchFilteredProducts = async ({ queryKey }) => {
    const [, filters] = queryKey;
    const { data } = await axios.get(`${API_URL}/products`, {
        params: filters,
    });
    return data;
};

export const useFilteredProducts = (filters) => {
    return useQuery(['products', filters], fetchFilteredProducts);
};
