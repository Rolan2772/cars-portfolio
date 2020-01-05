FROM node:12 as cars-portfolio-server-build
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY ./package*.json ./
COPY ./tsconfig*.json ./
COPY ./src ./src
RUN npm install && npm run build

FROM node:10-alpine
WORKDIR /home/node/app
COPY --chown=node:node --from=cars-portfolio-server-build /usr/src/app/build ./
COPY --chown=node:node --from=cars-portfolio-server-build /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD [ "node", "app.js" ]