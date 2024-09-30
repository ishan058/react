// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/authActions'; // Ensure this import is correct
import '../styles/Register.css'; // Ensure this path is correct

const Register = () => {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const checkPasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength('Weak');
        } else if (password.length < 10) {
            setPasswordStrength('Moderate');
        } else {
            setPasswordStrength('Strong');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userDetails.password !== userDetails.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            await dispatch(register(userDetails));
            setSuccess('Registration successful! Please log in.');
            setError('');
            setUserDetails({ name: '', email: '', phone: '', password: '', confirmPassword: '' }); // Clear fields
        } catch (err) {
            setError('Registration failed. Please try again.');
            setSuccess('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={userDetails.phone}
                    onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={userDetails.password}
                    onChange={(e) => {
                        setUserDetails({ ...userDetails, password: e.target.value });
                        checkPasswordStrength(e.target.value);
                    }}
                    required
                />
                <div className="password-strength">Strength: {passwordStrength}</div>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={userDetails.confirmPassword}
                    onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Register'}
                </button>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </form>
            <div className="social-media-login">
                <p>Or register with:</p>
                <button className="social-button google-button">Google</button>
                <button className="social-button facebook-button">Facebook</button>
            </div>
        </div>
    );
};

export default Register;
