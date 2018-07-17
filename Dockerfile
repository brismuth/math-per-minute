FROM node:8-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Configure timezone
RUN apk add --no-cache tzdata \
	&& cp /usr/share/zoneinfo/America/Denver /etc/localtime \
	&& echo "America/Denver" > /etc/timezone

RUN npm install -g pm2
# RUN pm2 install pm2-logrotate && pm2 set pm2-logrotate:retain 5

# Install build dependencies
RUN apk add --no-cache python2 \
	build-base

# Copy package.json and root files
COPY build.js package.json uglify.json yarn.lock /usr/src/app/

# Build
RUN yarn install --no-cache --frozen-lockfile

# Copy source for building
COPY src /usr/src/app/src

RUN yarn build

# Clean up build dependencies
RUN rm -rf src build.js uglify.json

# Install production dependencies
RUN yarn install --no-cache --frozen-lockfile --production

# Clean up other build dependencies
RUN apk del python2 \
	build-base

EXPOSE 3000

CMD export NODE_ENV=production && pm2 start ./build/server.js && pm2 save && pm2 logs -f server
