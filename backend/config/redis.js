const isRedisEnabled = process.env.REDIS_ENABLED !== 'false';

if (!isRedisEnabled) {
  console.warn('⚠️ Redis disabled in development. Using dummy client.');
  module.exports = {
    set: async () => {},
    get: async () => null,
    connect: async () => {},
  };
} else {
  const { createClient } = require('redis');

  const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });

  redisClient.on('error', err => console.error('Redis Client Error', err));

  (async () => {
    await redisClient.connect();
    console.log('Redis connected');
  })();

  module.exports = redisClient;
}
