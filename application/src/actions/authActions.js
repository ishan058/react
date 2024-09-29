// src/actions/authActions.js
import { LOGIN, LOGOUT, REGISTER } from './types'; // Assuming you have action types defined

export const login = (credentials) => {
    return (dispatch) => {
        // Logic for login
        dispatch({ type: LOGIN, payload: credentials });
    };
};

export const logout = () => {
    return (dispatch) => {
        // Logic for logout
        dispatch({ type: LOGOUT });
    };
};

// Ensure you have the correct export for register
export const register = (userDetails) => {
    return (dispatch) => {
        // Logic for registration
        dispatch({ type: REGISTER, payload: userDetails });
    };
};
