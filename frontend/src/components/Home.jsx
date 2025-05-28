import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ onLogout }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    onLogout();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2>Welcome, {user?.email || 'Guest'}!</h2>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  button: {
    padding: '10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Home;
