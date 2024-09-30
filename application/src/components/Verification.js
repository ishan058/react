import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resendVerificationEmail } from '../actions/authActions'; // Ensure this action exists
import '../styles/Verification.css';

const Verification = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleResend = () => {
        dispatch(resendVerificationEmail(email));
    };

    return (
        <div className="verification-container">
            <h2>Email Verification</h2>
            <p>Please check your email to verify your account.</p>
            <input
                type="email"
                placeholder="Enter your email to resend verification"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleResend}>Resend Verification Email</button>
        </div>
    );
};

export default Verification;
