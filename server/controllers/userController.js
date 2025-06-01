
const User = require('../models/User');

const userController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.getById(id);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.json(user);
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ message: 'Error fetching user' });
    }
  },

  // Create new user
  createUser: async (req, res) => {
    try {
      const { name, email } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
      }
      
      const newUser = await User.create({ name, email });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  },

  // Update user
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      
      const updatedUser = await User.update(id, { name, email });
      
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.delete(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Error deleting user' });
    }
  }
};

module.exports = userController;
