
// In-memory storage for demo purposes
// In a real application, you would use a database
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
let nextId = 3;

const User = {
  // Get all users
  getAll: async () => {
    return users;
  },

  // Get user by ID
  getById: async (id) => {
    return users.find(user => user.id === parseInt(id));
  },

  // Create new user
  create: async (userData) => {
    const newUser = {
      id: nextId++,
      name: userData.name,
      email: userData.email,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    return newUser;
  },

  // Update user
  update: async (id, userData) => {
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    
    if (userIndex === -1) {
      return null;
    }
    
    users[userIndex] = {
      ...users[userIndex],
      ...userData,
      updatedAt: new Date().toISOString()
    };
    
    return users[userIndex];
  },

  // Delete user
  delete: async (id) => {
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    
    if (userIndex === -1) {
      return false;
    }
    
    users.splice(userIndex, 1);
    return true;
  }
};

module.exports = User;
