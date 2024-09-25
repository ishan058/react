import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(product.reviews || []);

  const handleReviewSubmit = () => {
    setReviews([...reviews, { text: review }]);
    setReview('');
  };

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.text}</li>
        ))}
      </ul>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
      ></textarea>
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default ProductDetail;
