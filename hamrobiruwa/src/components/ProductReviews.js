// src/components/ProductReview.js
import React, { useState } from 'react';
import './styles.css';

const ProductReview = ({ productId, submitReview }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReview(productId, rating, reviewText);
    setRating(0);
    setReviewText('');
  };

  return (
    <form className="product-review" onSubmit={handleSubmit}>
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)} required>
        <option value="">Select</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      
      <label>Review:</label>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review"
        required
      />
      
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ProductReview;
