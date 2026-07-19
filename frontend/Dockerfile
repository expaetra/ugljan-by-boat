# ---- Stage 1: build the React app ----
# This stage has Node and all the build tooling. Its ONLY job is to produce
# the final static files (HTML/CSS/JS). None of this heavy tooling ships.
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (this layer is cached unless package files change).
COPY package*.json ./
RUN npm ci

# Copy the source and build. Vite outputs static files into /app/dist.
COPY . .
RUN npm run build

# ---- Stage 2: serve the built files with Nginx ----
# A tiny web-server image. We copy ONLY the built files from stage 1, so the
# final image has no Node, no source, no node_modules - small and clean.
# THIS is why the frontend is multi-stage and the backend isn't: here we throw
# away a whole build toolchain; Python has nothing comparable to discard.
FROM nginx:alpine

# Our custom Nginx config: SPA routing + proxying /api to the backend.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# The static build output from stage 1.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
