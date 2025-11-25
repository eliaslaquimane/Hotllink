# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files from backend-hotllink directory
COPY backend-hotllink/package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy application files from backend-hotllink directory
COPY backend-hotllink/ .

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
