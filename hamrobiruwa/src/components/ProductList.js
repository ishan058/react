// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products'); // Change to your API endpoint
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
