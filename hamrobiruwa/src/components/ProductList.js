import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('http://your-api-endpoint.com/products');
  return data;
};

const ProductList = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="product-list">
      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
