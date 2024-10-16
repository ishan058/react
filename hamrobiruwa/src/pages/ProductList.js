// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductFilters from '../components/ProductFilters';

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products.products);

  const handleFilter = (filters) => {
    const { category, priceRange, rating } = filters;
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    if (rating) {
      filtered = filtered.filter((product) => product.rating >= rating);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div>
      <ProductFilters onFilter={handleFilter} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.rating} Stars
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
