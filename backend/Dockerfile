# Stage 1: Build frontend
FROM node:18 as frontend-builder
WORKDIR /app
COPY ../frontend/package*.json .
RUN npm install
COPY ../frontend .
RUN npm run build

# Stage 2: Backend with built frontend
FROM node:20-alpine
WORKDIR /app

# Copy backend dependencies first
COPY package*.json ./
RUN npm install

# Copy backend source
COPY . .

# Copy built frontend from builder
COPY --from=frontend-builder /app/build ./public

EXPOSE 5000
CMD ["node", "server.js"]