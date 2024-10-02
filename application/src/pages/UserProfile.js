// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import { fetchUserProfile, updateUserProfile } from '../api'; // Import the correct functions
import '../styles/UserProfile.css';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({});

    useEffect(() => {
        const getUserProfile = async () => {
            const userData = await fetchUserProfile(userId);
            setUser(userData);
            setLoading(false);
        };
        getUserProfile();
    }, [userId]);

    const handleInputChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUserProfile(userId, updatedUser);
        setIsEditing(false);
        // Optionally refresh user data
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={updatedUser.name || user.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={updatedUser.email || user.email}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Save Changes</button>
                </form>
            ) : (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
