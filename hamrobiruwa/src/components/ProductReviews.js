// src/components/ProductReviews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  // Fetch reviews when the component mounts or productId changes
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/${productId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch reviews', error);
      }
    };
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('/api/reviews', { productId, rating, comment }, {
        headers: { Authorization: token },
      });

      // Reset form fields
      setRating(1);
      setComment('');

      // Re-fetch reviews after submission
      const response = await axios.get(`/api/reviews/${productId}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Failed to submit review', error);
    }
  };

  return (
    <div className="reviews-section">
      <h3>Reviews</h3>
      <form onSubmit={handleSubmit} className="review-form">
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <textarea
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review._id} className="review-item">
            <strong>{review.userId.name}:</strong> {review.rating} Stars - {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
