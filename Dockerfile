FROM node:12.14.1 as node
WORKDIR /app
COPY package.json yarn.lock /app/
RUN npm install @angular/cli@8.3.17 -g
RUN cd /app && yarn install
COPY .  /app

RUN cd /app && yarn build-locale

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist /usr/share/nginx/html
