import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = () => {
    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <form className="profile-form">
                <label>Username:</label>
                <input type="text" value="John Doe" disabled />

                <label>Email:</label>
                <input type="email" value="john@example.com" disabled />

                <label>Address:</label>
                <input type="text" placeholder="Enter your address" />

                <button type="button">Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfile;
