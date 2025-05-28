require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const authController = require('./controllers/auth');
require('./config/redis'); // Initialize Redis connection

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/profile', authController.authenticate, (req, res) => {
  res.json({ user: req.user });
});

// === Serve Frontend React App ===
const frontendPath = path.join(__dirname, 'build'); // assuming you move the build folder into backend

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// ================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
