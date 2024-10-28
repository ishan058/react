import axios from 'axios';
import { useQuery } from 'react-query';

// Set API URL, either from the environment variable or fallback to a default
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Fetch dashboard data (e.g., totalProducts, totalOrders, totalUsers)
export const fetchDashboardData = async () => {
    try {
        const response = await axios.get(`${API_URL}/dashboard`);
        return response.data;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error;
    }
};

// Fetch all orders for the admin dashboard
export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

// Fetch product statistics (like total sales, views, etc.)
export const fetchProductStatistics = async () => {
    try {
        const response = await axios.get(`${API_URL}/product-stats`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product statistics:', error);
        throw error;
    }
};

// WebSocket connection for real-time updates
export const connectWebSocket = () => {
    const ws = new WebSocket('wss://your-websocket-server.com');
    
    ws.onopen = () => {
        console.log('WebSocket connection established');
    };

    ws.onmessage = (event) => {
        console.log('WebSocket message received:', event.data);
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed');
    };

    return ws;
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

// Fetch specific product by ID
export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

// Fetch trending products
export const fetchTrendingProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/trending`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trending products:', error);
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

// Hook to get filtered products
export const useFilteredProducts = (filters) => {
    return useQuery(['products', filters], fetchFilteredProducts);
};

// Update order status
export const updateOrderStatus = async (orderId, newStatus) => {
    try {
        const response = await axios.patch(`${API_URL}/orders/${orderId}`, {
            status: newStatus,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update order status:', error);
        throw error;
    }
};
