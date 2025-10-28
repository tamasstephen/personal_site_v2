# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built application from builder stage
COPY --from=builder /app/dist/personal-site_v2/browser /usr/share/nginx/html/personal-site_v2/browser

# Copy nginx configuration
COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Use non-root user for security
USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
