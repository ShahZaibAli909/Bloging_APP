
import { useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const login = (credentials) => {
    const user = authService.login(credentials);
    setUser(user);
    return user;
  };

  const register = (userData) => {
    const user = authService.register(userData);
    // Auto-login after registration
    const loggedInUser = authService.login({
      email: userData.email,
      password: userData.password
    });
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return {
    user,
    isLoading,
    isAuthenticated: authService.isAuthenticated(),
    login,
    register,
    logout
  };
};
