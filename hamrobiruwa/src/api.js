
export const fetchWishlist = async () => {
  const response = await fetch(`${API_URL}/wishlist`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return await response.json();
};

export const removeFromWishlist = async (productId) => {
  await fetch(`${API_URL}/wishlist/${productId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
};


export const fetchReviews = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}/reviews`);
  return await response.json();
};

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


export const fetchOrderStatus = async (orderId) => {
  const response = await fetch(`${API_URL}/orders/${orderId}/status`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return await response.json();
};
