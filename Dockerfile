FROM node:18
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
# Expose the application port for the API
EXPOSE 3000
RUN npm run build
CMD ["node", "dist/main.js"]