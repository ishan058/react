// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import ProductReview from './ProductReview';
import { fetchReviews, submitReview } from '../api';
import './styles.css';

const ProductDetail = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const productReviews = await fetchReviews(productId);
      setReviews(productReviews);
    };
    loadReviews();
  }, [productId]);

  const handleSubmitReview = async (productId, rating, reviewText) => {
    const newReview = await submitReview(productId, rating, reviewText);
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="product-detail">
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>Rating: {review.rating} stars</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
      
      <ProductReview productId={productId} submitReview={handleSubmitReview} />
    </div>
  );
};

export default ProductDetail;
