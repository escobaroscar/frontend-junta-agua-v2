FROM node:14-alpine

RUN npm install -g pnpm

# Set the working directory in the container

WORKDIR /app

COPY . .

# Copy package.json and package-lock.json to the container

COPY package*.json ./

# ENV NODE_ENV production


ENV NODE_ENV=development
# Install dependencies

# Copy the rest of the application code to the container


RUN pnpm install

EXPOSE 3000
# Build the application
RUN pnpm build

ENV NODE_ENV=production
# Start the application
# CMD [ "npm", "run", "dev" ]
CMD [ "pnpm", "start" ]