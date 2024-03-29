# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10-alpine as build-stage
WORKDIR /opt/app

COPY *.json .
RUN npm install --silent \
  && npm audit fix

COPY src src
COPY public public

ARG REACT_APP_API_HOST
ARG REACT_APP_DASHBOARD_HOST
ENV REACT_APP_API_HOST ${REACT_APP_API_HOST} \
  REACT_APP_DASHBOARD_HOST ${REACT_APP_DASHBOARD_HOST}
RUN npm run build

# Stage 1, based on Nginx build app ready for production with Nginx.
FROM bitnami/nginx:1.16

ARG APP_DIR
ENV APP_DIR ${APP_DIR:-/app}

COPY nginx/nginx_server_block.conf /opt/bitnami/nginx/conf/server_blocks/nginx_server_block.conf
WORKDIR /app

# use dist from previous stage
COPY --from=build-stage /opt/app/build/ .
