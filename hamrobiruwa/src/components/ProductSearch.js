// src/components/ProductSearch.js

import React, { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';
import { fetchFilteredProducts } from '../api/api';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const debouncedFetchProducts = debounce(async (searchQuery) => {
    const result = await fetchFilteredProducts(searchQuery);
    setProducts(result);
  }, 300);

  useEffect(() => {
    if (query) {
      debouncedFetchProducts(query);
    } else {
      setProducts([]); // Clear results when the query is empty
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Products"
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
