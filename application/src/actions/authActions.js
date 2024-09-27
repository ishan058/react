export const login = (credentials) => ({
    type: 'LOGIN',
    payload: credentials,
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const register = (userData) => ({
    type: 'REGISTER',
    payload: userData,
});
