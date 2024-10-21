// src/components/withRole.js
import React from 'react';
import { useAuth } from '../hooks/useAuth';

const withRole = (WrappedComponent, requiredRole) => {
  return (props) => {
    const { user } = useAuth();
    if (!user || user.role !== requiredRole) {
      return <h1>Access Denied</h1>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withRole;
