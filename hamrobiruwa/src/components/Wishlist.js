// src/components/Wishlist.js
import React, { useState, useEffect } from 'react';

const Wishlist = ({ userId }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch user's wishlist from the API
    const fetchWishlist = async () => {
      const response = await fetch(`/api/wishlist?userId=${userId}`);
      const data = await response.json();
      setWishlist(data.wishlist);
    };

    fetchWishlist();
  }, [userId]);

  const removeFromWishlist = async (productId) => {
    await fetch(`/api/wishlist/remove`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId }),
    });

    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <button onClick={() => removeFromWishlist(product.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty</p>
      )}
    </div>
  );
};

export default Wishlist;
