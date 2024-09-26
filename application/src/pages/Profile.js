import React, { useState, useEffect } from 'react';
import '../styles/Profile.css'; // Corrected import path

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
            try {
                // Simulate a fetch call
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="profile">
            <h1>Your Profile</h1>
            <p>This is your profile page.</p>
        </div>
    );
};

export default Profile;
