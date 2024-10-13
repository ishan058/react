// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductReviews from './ProductReviews';
import '../App.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <h1 className="product-detail-title">{product.name}</h1>
      <p className="product-detail-price">${product.price}</p>
      <p className="product-detail-description">{product.description}</p>
      <ProductReviews productId={product._id} />
    </div>
  );
};

export default ProductDetail;
