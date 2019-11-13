FROM node:10.16.3 as node
WORKDIR /app
COPY package.json yarn.lock /app/
RUN npm install @angular/cli@8.3.17 -g
RUN cd /app && yarn install
COPY .  /app

RUN cd /app && yarn build-locale

FROM nginx:alpine
#RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist /usr/share/nginx/html

#RUN yarn install
#RUN yarn build

#FROM nginx:alpine
#COPY --from=node /dist/ka /usr/share/nginx/html
#COPY dist /usr/share/nginx/html
