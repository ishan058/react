import React from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from '../api/api';

const UserManagement = () => {
  const { data: users, isLoading, error } = useQuery('users', fetchUsers);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.data.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deactivateUser(user.id)}>Deactivate</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
