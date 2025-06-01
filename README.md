
# Full-Stack Application

A modern full-stack web application built with React (Create React App) frontend and Node.js/Express backend.

## Project Structure

```
project-root/
├── client/                  # Frontend (React via CRA)
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API calls
│   │   ├── App.jsx          # Root component
│   │   └── index.js         # React entry point
│   └── package.json         # Frontend dependencies
├── server/                  # Backend (Node.js/Express)
│   ├── routes/              # API endpoints
│   ├── controllers/         # Business logic
│   ├── models/              # Data models
│   ├── app.js               # Express setup
│   ├── server.js            # Server entry point
│   └── package.json         # Backend dependencies
└── README.md
```

## Features

- **Frontend**: React 18 with Create React App
- **Backend**: Node.js with Express
- **Routing**: React Router DOM for client-side routing
- **HTTP Client**: Axios for API communication
- **CORS**: Enabled for cross-origin requests
- **Security**: Helmet.js for security headers
- **Logging**: Morgan for HTTP request logging

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install backend dependencies:
```bash
cd server
npm install
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

### Development

1. Start the backend server:
```bash
cd server
npm run dev
```
The server will run on http://localhost:5000

2. Start the frontend development server:
```bash
cd client
npm start
```
The client will run on http://localhost:3000

### Production Build

1. Build the frontend:
```bash
cd client
npm run build
```

2. Start the production server:
```bash
cd server
npm start
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Environment Variables

### Client (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Server
```
NODE_ENV=development
PORT=5000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the MIT License.
