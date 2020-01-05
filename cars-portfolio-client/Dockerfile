FROM node:12 as cars-portfolio-client-build
WORKDIR /usr/src/app
COPY ./package*.json ./
COPY ./tsconfig*.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm install && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=cars-portfolio-client-build /usr/src/app/build ./