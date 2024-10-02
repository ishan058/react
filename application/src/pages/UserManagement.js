// src/pages/UserManagement.js
import React, { useState, useEffect } from 'react';
import { fetchUsers, updateUser } from '../api'; // Assume you have updateUser function in api
import '../styles/UserManagement.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [newUserData, setNewUserData] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };
        getUsers();
    }, []);

    const handleEditClick = (user) => {
        setEditingUser(user);
        setNewUserData({ name: user.name, email: user.email, phone: user.phone });
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        await updateUser(editingUser.id, newUserData); // Update the user
        setEditingUser(null); // Reset editing state
        setNewUserData({ name: '', email: '', phone: '' }); // Reset input fields
        // Refresh user list
        const usersData = await fetchUsers();
        setUsers(usersData);
    };

    return (
        <div className="user-management">
            <h2>User Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={() => handleEditClick(user)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingUser && (
                <div className="edit-user-form">
                    <h3>Edit User</h3>
                    <form onSubmit={handleUpdateUser}>
                        <input
                            type="text"
                            value={newUserData.name}
                            onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            value={newUserData.email}
                            onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="text"
                            value={newUserData.phone}
                            onChange={(e) => setNewUserData({ ...newUserData, phone: e.target.value })}
                            placeholder="Phone"
                            required
                        />
                        <button type="submit">Update</button>
                        <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
