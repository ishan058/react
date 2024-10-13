// src/pages/Wishlist.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/wishlist', {
        headers: { Authorization: token },
      });
      setWishlist(response.data.products);
    };
    fetchWishlist();
  }, []);

  return (
    <div>
      <h1>Your Wishlist</h1>
      <ul>
        {wishlist.map(product => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
