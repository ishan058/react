// src/components/ProductComparison.js
import React from 'react';

const ProductComparison = ({ products }) => {
  if (products.length === 0) return <p>No products to compare</p>;

  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {products.map((product) => (
              <th key={product.id}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            {products.map((product) => (
              <td key={product.id}>${product.price}</td>
            ))}
          </tr>
          <tr>
            <td>Rating</td>
            {products.map((product) => (
              <td key={product.id}>{product.rating} stars</td>
            ))}
          </tr>
          <tr>
            <td>Description</td>
            {products.map((product) => (
              <td key={product.id}>{product.description}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;
