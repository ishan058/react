import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import './ProductList.css';

// Function to fetch products from the API
const fetchProducts = async () => {
  const { data } = await axios.get('http://your-api-endpoint.com/products'); // Replace with your actual API endpoint
  return data;
};

// Custom hook for using products (can be reused in other components)
export const useProducts = () => {
  return useQuery('products', fetchProducts);
};

// ProductList Component
const ProductList = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="product-list">
      {data.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
