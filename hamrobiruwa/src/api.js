// src/api.js
export const fetchOrders = async () => {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT token is used
      },
    });
    return await response.json();
  };
  