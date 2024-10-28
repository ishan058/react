const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Create HTTP server and initialize Socket.IO
const server = http.createServer(app);
const io = new Server(server);

// Socket.IO connection handling
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

  // Emit updated order status to all clients
  socket.on('updateOrderStatus', ({ orderId, status }) => {
    io.emit('orderStatusUpdate', { orderId, status });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Function to update order status and notify clients
const updateOrderStatus = (orderId, status) => {
  io.emit('orderStatusUpdate', { orderId, status });
};

// Set the port and start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { server, updateOrderStatus };
