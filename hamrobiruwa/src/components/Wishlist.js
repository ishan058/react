// src/components/Wishlist.js
import React, { useEffect, useState } from 'react';
import { fetchWishlist, removeFromWishlist } from '../api/api';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadWishlist = async () => {
      const data = await fetchWishlist();
      setWishlist(data);
    };
    loadWishlist();
  }, []);

  const handleRemove = async (productId) => {
    await removeFromWishlist(productId);
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-item">
          <p>{item.name}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
