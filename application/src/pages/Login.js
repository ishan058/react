import React from 'react';
import { useAuth } from '../AuthContext'; // Import useAuth hook
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth(); // Get login function
    const navigate = useNavigate(); // Get navigate function

    const handleLogin = () => {
        login(); // Call login function
        navigate('/profile'); // Redirect to profile after login
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
