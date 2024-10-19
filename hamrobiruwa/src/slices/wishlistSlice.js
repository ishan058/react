import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToWishlist, removeFromWishlist, fetchWishlist } from '../api/api';

// Fetch wishlist items for the user
export const getWishlist = createAsyncThunk('wishlist/getWishlist', async () => {
  const response = await fetchWishlist();
  return response.data;
});

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default wishlistSlice.reducer;
