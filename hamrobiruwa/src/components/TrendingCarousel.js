// src/components/TrendingCarousel.js

import React, { useEffect, useState } from 'react';
import { fetchTrendingProducts } from '../api/api';
import '../styles/TrendingCarousel.css';

const TrendingCarousel = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const loadTrendingProducts = async () => {
      try {
        const products = await fetchTrendingProducts();
        setTrendingProducts(products);
      } catch (error) {
        console.error('Error loading trending products:', error);
      }
    };
    loadTrendingProducts();
  }, []);

  return (
    <div className="trending-carousel">
      <h2>Trending Products</h2>
      <div className="carousel">
        {trendingProducts.map((product) => (
          <div key={product.id} className="carousel-item">
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCarousel;
