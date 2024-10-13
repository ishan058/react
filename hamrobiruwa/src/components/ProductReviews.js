// src/components/ProductReviews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(`/api/reviews/${productId}`);
      setReviews(response.data);
    };
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/reviews', { productId, rating, comment }, {
      headers: { Authorization: token },
    });
    setRating(1);
    setComment('');
    // Re-fetch reviews after submission
    fetchReviews();
  };

  return (
    <div>
      <h2>Reviews</h2>
      <form onSubmit={handleSubmit}>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
        <button type="submit">Submit Review</button>
      </form>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            <strong>{review.userId.name}:</strong> {review.rating} Stars - {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
