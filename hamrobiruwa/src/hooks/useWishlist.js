import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

// Fetch wishlist
const fetchWishlist = async () => {
  const { data } = await axios.get('http://your-api-endpoint.com/wishlist');
  return data;
};

// Add product to wishlist
const addToWishlist = async (productId) => {
  const { data } = await axios.post(`http://your-api-endpoint.com/wishlist`, { productId });
  return data;
};

// Remove product from wishlist
const removeFromWishlist = async (productId) => {
  const { data } = await axios.delete(`http://your-api-endpoint.com/wishlist/${productId}`);
  return data;
};

export const useWishlist = () => {
  return useQuery('wishlist', fetchWishlist);
};

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation(addToWishlist, {
    onSuccess: () => {
      queryClient.invalidateQueries('wishlist');
    },
  });
};

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation(removeFromWishlist, {
    onSuccess: () => {
      queryClient.invalidateQueries('wishlist');
    },
  });
};
