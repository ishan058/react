// src/actions/authActions.js
import { LOGIN, LOGOUT, REGISTER } from './types';

export const login = (credentials) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            // Simulate an API call
            setTimeout(() => {
                // Logic for successful login
                dispatch({ type: LOGIN, payload: credentials });
                resolve(); // Resolve the promise on success
            }, 1000);
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });
    };
};

export const register = (userDetails) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            // Simulate an API call
            setTimeout(() => {
                dispatch({ type: REGISTER, payload: userDetails });
                resolve(); // Resolve the promise on success
            }, 1000);
        });
    };
};
