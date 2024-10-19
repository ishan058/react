import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductReviews, addReview } from '../slices/reviewSlice';
import './Reviews.css';

const Reviews = ({ productId }) => {
  const dispatch = useDispatch();
  const { reviews, loading } = useSelector((state) => state.reviews);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    dispatch(getProductReviews(productId));
  }, [dispatch, productId]);

  const handleSubmit = () => {
    dispatch(addReview({ productId, review: newReview }));
    setNewReview('');
  };

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <p>{review}</p>
        </div>
      ))}
      <div className="add-review">
        <textarea
          placeholder="Write a review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default Reviews;
