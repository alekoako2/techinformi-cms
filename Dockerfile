#FROM node:10.16.3 as node
#
#COPY . .
#RUN yarn install
#RUN yarn build

FROM nginx:alpine
#COPY --from=node /dist/ka /usr/share/nginx/html
COPY dist/ka /usr/share/nginx/html
