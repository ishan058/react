// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsPerPage = 10;

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`/api/products?page=${currentPage}&limit=${productsPerPage}`);
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
    }
    fetchProducts();
  }, [currentPage]);

  return (
    <div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={(page) => setCurrentPage(page)} 
      />
    </div>
  );
};

export default ProductList;
