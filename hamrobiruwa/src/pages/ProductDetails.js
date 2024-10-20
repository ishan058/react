// src/pages/ProductDetails.js
import React, { useState, useEffect } from 'react';
import ReviewForm from '../components/ReviewForm';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    }
    async function fetchReviews() {
      const res = await fetch(`/api/products/${productId}/reviews`);
      const data = await res.json();
      setReviews(data);
    }
    fetchProduct();
    fetchReviews();
  }, [productId]);

  const handleReviewSubmit = async (reviewData) => {
    await fetch(`/api/products/${productId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData)
    });
    setReviews([...reviews, reviewData]);
  };

  return (
    <div>
      {product && <h1>{product.name}</h1>}
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.review}</p>
            <p>{review.rating} Star</p>
          </div>
        ))}
      </div>
      <ReviewForm productId={productId} onSubmitReview={handleReviewSubmit} />
    </div>
  );
};

export default ProductDetails;
