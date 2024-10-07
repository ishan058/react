// src/components/Toast.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const notify = () => toast("Notification Example!");

  return (
    <div>
      <button onClick={notify}>Show Notification</button>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Toast;
