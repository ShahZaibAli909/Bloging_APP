const sequelize = require('../config/db');
const User = require('../models/User');

async function initializeDatabase() {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log('PostgreSQL connection established.');

    // Sync models
    await sequelize.sync({ alter: true });
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
}

module.exports = initializeDatabase;