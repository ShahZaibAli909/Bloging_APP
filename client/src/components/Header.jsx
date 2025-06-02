import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">Full-Stack App</Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/about" className="nav-link">About</Link>
          {user && (
            <div className="user-info">
              <span className="user-name">Welcome, {user.name}!</span>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;