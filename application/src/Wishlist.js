import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
