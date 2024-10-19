import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../api/api';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data: products, isLoading, error } = useQuery(['products', page], () => fetchProducts(page));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  const totalPages = Math.ceil(products.total / products.per_page); // Assuming your API returns total and per_page

  return (
    <div>
      <div className="product-list">
        {products.data.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;
