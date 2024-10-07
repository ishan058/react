// src/pages/Wishlist.js
import React, { useEffect, useState } from 'react';
import { fetchWishlist, removeFromWishlist } from '../utils/api';

const Wishlist = ({ userId }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadWishlist = async () => {
      const data = await fetchWishlist(userId);
      setWishlist(data);
    };
    loadWishlist();
  }, [userId]);

  const handleRemove = async (productId) => {
    await removeFromWishlist(userId, productId);
    setWishlist(wishlist.filter((item) => item.id !== productId));
  };

  return (
    <div className="container">
      <h1>My Wishlist</h1>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
