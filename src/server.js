// src/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
require('dotenv').config();

const adminRoutes = require('./routes/adminRoutes');
const poliRoutes = require('./routes/poliRoutes');
const queueRoutes = require('./routes/queueRoutes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menyediakan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process on connection error
});

// Socket.io connection
app.set('io', io);

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/poli', poliRoutes);
app.use('/api/queue', queueRoutes);

// Rute untuk mengarahkan ke halaman HTML di views
app.get('/patient', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'patient.html'));
});

app.get('/poli', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'poli.html'));
});

app.get('/addPoli', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'addPoli.html'));
});

// Server start
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
