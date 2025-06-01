
import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser } from '../services/api';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      setNewUser({ name: '', email: '' });
      loadUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Welcome to the Full-Stack App</h2>
      
      <div className="card">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
              style={{ marginRight: '10px', padding: '8px' }}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
              style={{ padding: '8px' }}
            />
          </div>
          <button type="submit" className="btn">Add User</button>
        </form>
      </div>

      <div className="card">
        <h3>Users</h3>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id} style={{ marginBottom: '10px' }}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
