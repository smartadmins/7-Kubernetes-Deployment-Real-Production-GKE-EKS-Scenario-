FROM nginx:alpine

# Create non-root user
RUN addgroup -S appgroup -g 10001 && \
    adduser -S appuser -u 10001 -G appgroup

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy application
COPY index.html /usr/share/nginx/html/index.html

# Create required directories and set permissions
RUN mkdir -p /var/cache/nginx /var/run/nginx && \
    chown -R 10001:10001 \
        /usr/share/nginx/html \
        /var/cache/nginx \
        /var/run/nginx \
        /etc/nginx

USER 10001

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
