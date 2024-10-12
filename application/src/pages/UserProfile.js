import React, { useEffect, useState } from 'react';
import { fetchUserProfile, updateUserProfile } from '../utils/api'; // Ensure this import is correct
import Loader from '../components/Loader';
import Notification from '../components/Notification';
import { useAuth } from '../contexts/AuthContext';

const UserProfile = () => {
    const { currentUser } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await fetchUserProfile(currentUser.id);
                setProfile(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        if (currentUser) loadProfile();
    }, [currentUser]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(profile);
            setMessage('Profile updated successfully!');
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <Loader />;
    
    return (
        <div>
            {message && <Notification message={message} type="success" />}
            {error && <Notification message={error} type="error" />}
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={profile?.name || ''} // Added fallback to avoid undefined
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfile;
