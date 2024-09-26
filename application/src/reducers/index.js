// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import wishlistReducer from './wishlistReducer'; // Import the wishlist reducer

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    wishlist: wishlistReducer, // Add the wishlist reducer
});

export default rootReducer;
