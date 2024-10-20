// src/components/ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ productId, onSubmitReview }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReview({ productId, review, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={review} 
        onChange={(e) => setReview(e.target.value)} 
        placeholder="Write your review..."
      ></textarea>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map(r => (
          <option key={r} value={r}>{r} Star</option>
        ))}
      </select>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
