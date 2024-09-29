// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/authActions';
import '../styles/Register.css'; // Ensure this path is correct

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Example validation
        if (!username || !email || !password) {
            setError('All fields are required.');
            return;
        }

        const userDetails = { username, email, password };
        
        // Dispatch register action
        dispatch(register(userDetails))
            .then(response => {
                // Handle successful registration
                console.log('Registration successful:', response);
            })
            .catch(err => {
                // Handle errors from registration
                setError(err.message);
            });
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
