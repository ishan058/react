// src/reducers/authReducer.js
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                error: 'Registration failed!',
            };
        default:
            return state;
    }
};

export default authReducer;
