# Simple production image for Node app
FROM node:20-alpine
WORKDIR /usr/src/app

# Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy app source
COPY src ./src

EXPOSE 3000
ENV PORT=3000

# Basic container healthcheck hitting the app's /health endpoint
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["npm", "start"]
