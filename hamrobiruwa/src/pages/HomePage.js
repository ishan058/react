import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import TrendingCarousel from '../components/TrendingCarousel';
import FeaturedCategories from '../components/FeaturedCategories';
import Testimonials from '../components/Testimonials';
import NewsletterSubscription from '../components/NewsletterSubscription';
import '../styles/HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };
    loadProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="homepage">
      <h1>Welcome to Hamro Biruwa</h1>
      <SearchBar onSearch={handleSearch} />

      {/* Trending Carousel */}
      <TrendingCarousel />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Product Grid */}
      <h2>Our Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Subscription */}
      <NewsletterSubscription />
    </div>
  );
};

export default HomePage;
