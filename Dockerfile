# Use Node.js 22 LTS with Debian Bullseye
FROM node:22-bullseye

# Install build dependencies for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    make \
    g++ \
    git \
    git-lfs \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies with verbose logging
RUN npm install --verbose || echo "Some packages failed to install, continuing..."

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=development

# Expose ports for debugging
EXPOSE 3000 9229

# Keep container running
CMD ["tail", "-f", "/dev/null"]
