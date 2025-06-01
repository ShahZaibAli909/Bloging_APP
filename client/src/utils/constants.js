
export const STORAGE_KEYS = {
  USERS: 'app_users',
  CURRENT_USER: 'current_user'
};

export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 6,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

export const MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_EXISTS: 'User with this email already exists',
  FILL_ALL_FIELDS: 'Please fill in all fields',
  PASSWORD_TOO_SHORT: 'Password must be at least 6 characters',
  INVALID_EMAIL: 'Please enter a valid email address'
};
