import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/userActions'; // Ensure this action exists
import '../styles/Profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (user) {
            setProfileData({
                name: user.name,
                email: user.email,
                phone: user.phone,
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile(profileData));
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={profileData.name} onChange={handleChange} required placeholder="Full Name" />
                <input type="email" name="email" value={profileData.email} onChange={handleChange} required placeholder="Email" />
                <input type="text" name="phone" value={profileData.phone} onChange={handleChange} required placeholder="Phone Number" />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
