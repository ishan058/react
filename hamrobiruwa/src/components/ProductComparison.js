import React, { useState } from 'react';
import './ProductComparison.css';

const ProductComparison = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProductSelection = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="product-comparison">
      <h2>Compare Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <input
              type="checkbox"
              onChange={() => toggleProductSelection(product)}
            />
            <span>{product.name}</span>
          </div>
        ))}
      </div>

      {selectedProducts.length > 0 && (
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              {selectedProducts.map(product => (
                <th key={product.id}>{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              {selectedProducts.map(product => (
                <td key={product.id}>${product.price}</td>
              ))}
            </tr>
            <tr>
              <td>Rating</td>
              {selectedProducts.map(product => (
                <td key={product.id}>{product.rating}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductComparison;
