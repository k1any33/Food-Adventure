# Requires node 16
FROM node:14

# Create client directory
WORKDIR /usr/src/

# Copy over all files for build
COPY package*.json ./

# Install app dependencies
RUN npm install 

# Copy app to container
COPY . .

EXPOSE 3000

CMD ["npm", "start"]