// src/pages/UserEdit.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, updateUser } from '../api';
import '../styles/UserEdit.css';

const UserEdit = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', phone: '', active: false });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const userData = await fetchUserById(userId);
            setUser(userData);
            setLoading(false);
        };
        getUser();
    }, [userId]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(userId, user);
        navigate('/admin/users');
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="user-edit">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
                <label>
                    <input type="checkbox" name="active" checked={user.active} onChange={(e) => setUser({ ...user, active: e.target.checked })} />
                    Active
                </label>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UserEdit;
