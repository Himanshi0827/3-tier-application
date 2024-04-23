# Use official Node.js image as the base image
FROM node:14-alpine

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 3000


# Command to run the application
CMD ["npm", "start"]