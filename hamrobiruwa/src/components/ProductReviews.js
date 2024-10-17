// src/components/ProductReviews.js
import React, { useState, useEffect } from 'react';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`/api/reviews?productId=${productId}&sortBy=${sortBy}`);
      const data = await response.json();
      setReviews(data.reviews);
    };

    fetchReviews();
  }, [productId, sortBy]);

  return (
    <div className="reviews-container">
      <h3>Product Reviews</h3>
      <div className="review-sort">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" onChange={(e) => setSortBy(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
        </select>
      </div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h4>{review.userName}</h4>
              <p>Rating: {review.rating}</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

export default ProductReviews;
