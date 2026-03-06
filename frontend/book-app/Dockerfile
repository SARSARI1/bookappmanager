# Step 1: Use Node.js for building and serving the application
FROM node:25.8.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Angular uses
EXPOSE 4200

# Run the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]