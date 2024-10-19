import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReviews, submitReview } from '../api/api';

// Fetch product reviews
export const getProductReviews = createAsyncThunk(
  'reviews/getProductReviews',
  async (productId) => {
    const response = await fetchReviews(productId);
    return response.data;
  }
);

// Submit new review
export const addReview = createAsyncThunk('reviews/addReview', async ({ productId, review }) => {
  const response = await submitReview(productId, review);
  return response.data;
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      });
  },
});

export default reviewSlice.reducer;
