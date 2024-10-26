// src/components/AdminLogs.js
import React, { useEffect, useState } from 'react';
import { fetchAdminLogs } from '../../api/api';

const AdminLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
      const logData = await fetchAdminLogs();
      setLogs(logData);
    };

    loadLogs();
  }, []);

  return (
    <div className="admin-logs">
      <h2>Admin Activity Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.action} by Admin {log.adminId} at {new Date(log.timestamp).toLocaleString()}
            <br />
            Details: {log.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminLogs;
