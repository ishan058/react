// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import { fetchUserProfile, updateUserProfile } from '../utils/api';

const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      const data = await fetchUserProfile(userId);
      setProfile(data);
    };
    loadUserProfile();
  }, [userId]);

  const handleUpdate = async (newProfileData) => {
    const updatedProfile = await updateUserProfile(userId, newProfileData);
    setProfile(updatedProfile);
  };

  return (
    <div className="container">
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <button onClick={() => handleUpdate({ ...profile, name: 'Updated Name' })}>
            Update Profile
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
