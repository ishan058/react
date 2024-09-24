import React, { useState, useEffect } from 'react';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetchProductDetails();
    fetchProductReviews();
  }, [match.params.id]);

  const fetchProductDetails = async () => {
    const response = await fetch(`/api/products/${match.params.id}`);
    const data = await response.json();
    setProduct(data);
  };

  const fetchProductReviews = async () => {
    const response = await fetch(`/api/products/${match.params.id}/reviews`);
    const data = await response.json();
    setReviews(data);
  };

  const submitReview = async (e) => {
    e.preventDefault();
    const newReview = { text: reviewText, rating };
    await fetch(`/api/products/${match.params.id}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview)
    });
    setReviewText('');
    setRating(5);
    fetchProductReviews();
  };

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div className="reviews">
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              {review.text} - {review.rating} Stars
            </li>
          ))}
        </ul>
        <form onSubmit={submitReview}>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write a review"
            required
          />
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} Stars
              </option>
            ))}
          </select>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
