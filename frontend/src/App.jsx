import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  // This useEffect is only for tracking authentication status when the app first loads.
  useEffect(() => {
    // This will ensure that we don't constantly update isAuthenticated unless the token changes.
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Login onAuth={() => setIsAuthenticated(true)} />} 
        />
        <Route 
          path="/signup" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Signup />} 
        />
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home onLogout={() => setIsAuthenticated(false)} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
