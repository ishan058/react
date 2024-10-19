import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../api/api';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products, isLoading, error } = useQuery(['products', searchTerm], () => fetchProducts(searchTerm));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for products"
      />
      <div className="product-list">
        {products.data.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
