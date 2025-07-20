// src/app.js
require('dotenv').config();
const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const userRoutes = require('./routes/userRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const { connectDB } = require('./config/database');
const { initializeMQTT } = require('./services/mqttService');
const { handleSocketConnection } = require('./sockets/socketHandler');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Connect to MongoDB
connectDB();

// Initialize MQTT and pass the io object
initializeMQTT(io);

// Handle Socket.IO connections
handleSocketConnection(io);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public"))); // Adjust path

// Mount Routes
app.use('/api/users', userRoutes); // Add a base path for your API
app.use('/api/devices', deviceRoutes);

// Basic route for testing (optional)
app.get("/", (req, res) => {
    res.send("API is running!");
});

server.listen(process.env.HTTP_PORT, () => console.log(`Server running on port ${process.env.HTTP_PORT}`));