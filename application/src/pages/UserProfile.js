// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../utils/api';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      const profileData = await fetchUserProfile(1); // Hardcoded userId for example
      setUser(profileData);
    };
    loadUserProfile();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
