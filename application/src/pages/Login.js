import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Destructure the login function from useAuth
    const { login } = useAuth(); 

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Call the login function with user details
        login({ email, password });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
