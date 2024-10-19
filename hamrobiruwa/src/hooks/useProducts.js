import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('http://your-api-endpoint.com/products');
  return data;
};

// Create a custom hook for fetching products
export const useProducts = () => {
  return useQuery('products', fetchProducts, {
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
    refetchOnWindowFocus: false, // Disable refetch when window regains focus
  });
};
