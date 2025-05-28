const redisClient = require('../config/redis');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

// Mock user database
const users = [
  {
    id: '1',
    email: 'test@test.com',
    password: bcrypt.hashSync('password123', 10)
  }
];

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const exists = users.some(u => u.email === email);
    if (exists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    const user = {
      id: uuidv4(),
      email,
      password: bcrypt.hashSync(password, 10)
    };
    users.push(user);

    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = users.find(u => u.email === email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create session
    const sessionId = uuidv4();
    await redisClient.set(sessionId, JSON.stringify({ id: user.id, email }), {
      EX: 86400 // 24h expiration
    });

    res.json({ sessionId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No session provided' });
    }

    const session = await redisClient.get(authHeader);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    req.user = JSON.parse(session);
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};