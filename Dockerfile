FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Configure timezone
RUN apk add --no-cache tzdata \
	&& cp /usr/share/zoneinfo/America/Denver /etc/localtime \
	&& echo "America/Denver" > /etc/timezone

RUN apk add --no-cache python2 \
	build-base

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn install --no-cache --frozen-lockfile --production

RUN npm install -g pm2
# RUN pm2 install pm2-logrotate && pm2 set pm2-logrotate:retain 5

# Bundle app source
COPY build /usr/src/app/

EXPOSE 3000

CMD export NODE_ENV=production && pm2 start server.js && pm2 save && pm2 logs -f server
