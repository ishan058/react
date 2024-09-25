import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from './ProductCard';

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      <div className="product-grid">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
