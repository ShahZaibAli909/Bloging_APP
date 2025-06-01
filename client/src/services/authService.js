
const USERS_KEY = 'app_users';
const CURRENT_USER_KEY = 'current_user';

export const authService = {
  // Get all registered users from localStorage
  getUsers: () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  // Save users to localStorage
  saveUsers: (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  // Register a new user
  register: (userData) => {
    const users = authService.getUsers();
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser = {
      id: Date.now(), // Simple ID generation
      name: userData.name,
      email: userData.email,
      password: userData.password, // In real app, this would be hashed
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    authService.saveUsers(users);
    
    return { id: newUser.id, name: newUser.name, email: newUser.email };
  },

  // Login user
  login: (credentials) => {
    const users = authService.getUsers();
    const user = users.find(u => 
      u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const userSession = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userSession));
    return userSession;
  },

  // Get current logged in user
  getCurrentUser: () => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return authService.getCurrentUser() !== null;
  }
};
