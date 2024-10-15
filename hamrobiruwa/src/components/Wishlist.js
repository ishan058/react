// src/components/Wishlist.js
import React, { useState, useEffect } from 'react';
import { fetchWishlist, removeFromWishlist } from '../api';
import './styles.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadWishlist = async () => {
      const items = await fetchWishlist();  // API to fetch wishlist items
      setWishlist(items);
    };
    loadWishlist();
  }, []);

  const handleRemove = async (productId) => {
    await removeFromWishlist(productId);
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map(item => (
            <li key={item.id}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
