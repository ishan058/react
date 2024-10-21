
import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import withRole from '../components/withRole';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AdminDashboard />
    </div>
  );
};

export default withRole(AdminPage, 'admin');
