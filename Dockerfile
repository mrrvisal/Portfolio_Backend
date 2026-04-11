# Use official Node.js runtime as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies (skip dev deps)
RUN npm ci --only=production --no-optional && npm cache clean --force

# Copy application code
COPY . .

# Create non-root user for security (optional but best practice)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN chown -R appuser:appgroup /app
USER appuser

# Expose port
EXPOSE 4000

# Health check (optional)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/', (res) => process.exit(res.statusCode === 200 ? 0 : 1))"

# Run the app
CMD ["npm", "start"]
