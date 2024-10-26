// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Create HTTP server and Socket.io instance
const server = http.createServer(app);
const io = socketIo(server);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for product updates and broadcast to all clients
  socket.on('productUpdate', (data) => {
    io.emit('productUpdate', data);
  });

  // Listen for new orders and broadcast to all clients
  socket.on('newOrder', (order) => {
    io.emit('newOrder', order);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Set the port and start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
