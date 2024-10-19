import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchReviews, submitReview } from '../api/api';

const ProductReviews = ({ productId }) => {
  const queryClient = useQueryClient();
  const { data: reviews, isLoading, error } = useQuery(['reviews', productId], () => fetchReviews(productId));
  const mutation = useMutation(submitReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews', productId]);
    }
  });

  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ productId, text: reviewText });
    setReviewText('');
  };

  if (isLoading) return <p>Loading reviews...</p>;
  if (error) return <p>Error loading reviews</p>;

  return (
    <div>
      <h3>Reviews</h3>
      <form onSubmit={handleSubmit}>
        <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
        <button type="submit">Submit Review</button>
      </form>
      <ul>
        {reviews.data.map(review => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
