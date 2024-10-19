import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

// Fetch reviews
const fetchReviews = async (productId) => {
  const { data } = await axios.get(`http://your-api-endpoint.com/products/${productId}/reviews`);
  return data;
};

// Submit review
const submitReview = async ({ productId, review }) => {
  const { data } = await axios.post(`http://your-api-endpoint.com/products/${productId}/reviews`, review);
  return data;
};

// Custom hook for fetching reviews
export const useProductReviews = (productId) => {
  return useQuery(['reviews', productId], () => fetchReviews(productId));
};

// Custom hook for submitting reviews
export const useSubmitReview = () => {
  const queryClient = useQueryClient();
  return useMutation(submitReview, {
    onSuccess: (data, variables) => {
      // Invalidate and refetch reviews after a new review is added
      queryClient.invalidateQueries(['reviews', variables.productId]);
    },
  });
};
