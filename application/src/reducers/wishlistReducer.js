// src/reducers/wishlistReducer.js
const initialState = {
    wishlist: [],
};

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            return { ...state, wishlist: [...state.wishlist, action.payload] }; // Add product to wishlist
        case 'REMOVE_FROM_WISHLIST':
            return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id) }; // Remove product from wishlist
        default:
            return state;
    }
};

export default wishlistReducer;
