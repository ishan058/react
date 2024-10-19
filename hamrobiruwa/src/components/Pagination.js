import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useProducts(page);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <div className="product-list">
        {data.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;
