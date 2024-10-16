import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.status = 'succeeded';
    },
    logoutSuccess(state) {
      state.user = null;
      state.status = 'idle';
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
