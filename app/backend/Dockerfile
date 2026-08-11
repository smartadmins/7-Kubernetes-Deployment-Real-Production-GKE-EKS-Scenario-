FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

# Create non-root user with explicit UID/GID
RUN addgroup -S appgroup -g 10001 && \
    adduser -S appuser -u 10001 -G appgroup

# Give ownership of application directory
RUN chown -R 10001:10001 /app

USER 10001

EXPOSE 5000

CMD ["node", "server.js"]
