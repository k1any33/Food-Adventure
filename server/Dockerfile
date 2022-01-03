# Requires node 14
FROM node:14

# Create server directory
WORKDIR /usr/src/

# Copy over all files for build
COPY package*.json ./

# Install app dependencies
RUN npm install 

# Copy app to container
COPY . .

EXPOSE 5000

CMD ["npm", "start"]