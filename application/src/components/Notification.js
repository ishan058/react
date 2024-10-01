// src/components/Notification.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
    const notify = () => toast("Wow! You've added a new product!");

    return (
        <div>
            <ToastContainer />
            <button onClick={notify}>Notify Me!</button>
        </div>
    );
};

export default Notification;
