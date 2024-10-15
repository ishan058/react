
const API_URL = process.env.REACT_APP_API_URL;

// Fetch all products from the API
export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // If token-based auth is used
    },
  });
  return await response.json();
};

// Add a new product to the API
export const addProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

// Delete a product from the API
export const deleteProduct = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return await response.json();
};

// Fetch wishlist
export const fetchWishlist = async () => {
  const response = await fetch(`${API_URL}/wishlist`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return await response.json();
};

// Remove from wishlist
export const removeFromWishlist = async (productId) => {
  await fetch(`${API_URL}/wishlist/${productId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

// Fetch reviews
export const fetchReviews = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}/reviews`);
  return await response.json();
};

// Submit a review
export const submitReview = async (productId, rating, reviewText) => {
  const response = await fetch(`${API_URL}/products/${productId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ rating, text: reviewText }),
  });
  return await response.json();
};

// Fetch order status
export const fetchOrderStatus = async (orderId) => {
  const response = await fetch(`${API_URL}/orders/${orderId}/status`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return await response.json();
};

