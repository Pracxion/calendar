# base image
FROM node:20-alpine

# set working directory
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]