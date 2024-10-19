import React from 'react';
import { useWishlist, useAddToWishlist, useRemoveFromWishlist } from '../hooks/useWishlist';

const Wishlist = () => {
  const { data: wishlist, isLoading, error } = useWishlist();
  const { mutate: addToWishlist } = useAddToWishlist();
  const { mutate: removeFromWishlist } = useRemoveFromWishlist();

  if (isLoading) return <p>Loading wishlist...</p>;
  if (error) return <p>Error loading wishlist</p>;

  return (
    <div className="wishlist">
      <h3>Your Wishlist</h3>
      {wishlist && wishlist.map((item) => (
        <div key={item.id} className="wishlist-item">
          <h4>{item.name}</h4>
          <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
