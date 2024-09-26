import React, { useState } from 'react';

const UserProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleUpdate = () => {
        // Implement update logic (e.g., API call)
        console.log('Updated User Info:', { name, email });
    };

    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UserProfile;
