FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./controllers ./controllers
COPY ./middleware ./middleware
COPY ./models ./models
COPY ./routes ./routes
COPY server.js server.js
COPY .env .env
COPY socketServer.js socketServer.js
COPY ./package-lock.json ./package-lock.json
COPY ./client/package.json ./client/package.json
COPY ./client/package-lock.json ./client/package-lock.json
COPY ./client/public ./client/public
COPY ./client/src ./client/src
RUN npm install
RUN cd client && npm install
EXPOSE 3000
CMD ["node","server.js"]