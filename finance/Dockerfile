# -------- build stage --------
FROM node:22-alpine AS build
WORKDIR /app

# Copy only dependency files first (to leverage caching)
COPY package.json yarn.lock ./

# Install dependencies exactly as defined in yarn.lock
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the project (produces /dist or /build depending on config)
RUN yarn build

# -------- production stage --------
FROM nginx:stable-alpine

# Copy build output from previous stage into nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html
# If your framework outputs to /build instead of /dist, adjust accordingly:
# COPY --from=build /app/build /usr/share/nginx/html

# Optional: Replace nginx conf for SPA (Single Page App) routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose container port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
