// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct way to import thunk
import rootReducer from './reducers'; // Ensure this is pointing to your rootReducer

// Create the Redux store with thunk middleware
const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // Applying the thunk middleware
);

export default store; // Default export
