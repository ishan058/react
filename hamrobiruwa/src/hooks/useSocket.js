import { useEffect } from 'react';
import { io } from 'socket.io-client';

const useSocket = (onProductUpdate) => {
  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('productUpdate', (data) => {
      onProductUpdate(data);
    });

    return () => socket.disconnect();
  }, [onProductUpdate]);
};

export default useSocket;
