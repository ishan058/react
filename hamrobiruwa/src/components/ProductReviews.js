import React, { useState, useEffect } from 'react';
import { submitReview, fetchReviews } from '../api/api';
import './ProductReviews.css';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const loadReviews = async () => {
      const fetchedReviews = await fetchReviews(productId);
      setReviews(fetchedReviews);
    };
    loadReviews();
  }, [productId]);

  const handleReviewSubmit = async () => {
    if (newReview && rating) {
      await submitReview(productId, { text: newReview, rating });
      setNewReview('');
      setRating(0);
      const updatedReviews = await fetchReviews(productId);
      setReviews(updatedReviews);
    }
  };

  return (
    <div className="product-reviews">
      <h3>Customer Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <p>{review.text}</p>
          <span>Rating: {review.rating}/5</span>
        </div>
      ))}

      <div className="review-form">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Leave a review..."
        />
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value="0">Select Rating</option>
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <button onClick={handleReviewSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default ProductReviews;
