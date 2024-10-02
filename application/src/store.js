// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Import your auth slice
import rootReducer from './reducers'; // Ensure this is pointing to your rootReducer file

// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
    reducer: {
        auth: authReducer, // Include the auth slice reducer
        ...rootReducer,    // Spread the rootReducer to include all other reducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Default middleware from Redux Toolkit
});

export default store;
