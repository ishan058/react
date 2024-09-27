// src/actions/authActions.js
export const login = (credentials) => {
    return {
        type: 'LOGIN',
        payload: credentials,
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const register = (userData) => {
    return {
        type: 'REGISTER',
        payload: userData,
    };
};
