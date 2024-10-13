// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products'); // Update with your API endpoint
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <Link to={`/product/${product._id}`} className="product-link">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
