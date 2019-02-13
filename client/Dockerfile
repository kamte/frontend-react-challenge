
FROM node:10.15.0-slim as builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i --ignore-scripts
RUN npm run build

# Production environment
FROM nginx:1.15.8-alpine
COPY overwrite/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
