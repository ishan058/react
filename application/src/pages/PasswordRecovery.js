// src/pages/PasswordRecovery.js
import React, { useState } from 'react';
import '../styles/PasswordRecovery.css';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRecovery = (e) => {
        e.preventDefault();
        // Implement your recovery logic here, e.g., sending an email to the user
        setMessage(`Recovery instructions sent to ${email}`);
    };

    return (
        <div className="recovery-container">
            <h2>Password Recovery</h2>
            {message && <div className="message">{message}</div>}
            <form onSubmit={handleRecovery} className="recovery-form">
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="recovery-button">Send Recovery Email</button>
            </form>
        </div>
    );
};

export default PasswordRecovery;
