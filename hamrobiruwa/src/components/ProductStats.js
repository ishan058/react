// src/components/ProductStats.js
import React from 'react';

const ProductStats = ({ data }) => {
  return (
    <div className="product-stats">
      <h2>Product Statistics</h2>
      <div className="stats-grid">
        <div>
          <h3>Top Selling Product</h3>
          <p>{data.topSelling}</p>
        </div>
        <div>
          <h3>Most Viewed Product</h3>
          <p>{data.mostViewed}</p>
        </div>
        <div>
          <h3>Total Products</h3>
          <p>{data.totalProducts}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStats;
