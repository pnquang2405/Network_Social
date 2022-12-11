FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./public ./public
COPY ./src ./src
COPY ./client/package.json ./client/package.json
COPY ./client/package-lock.json ./client/package-lock.json
COPY ./client/public ./client/public
COPY ./client/src ./client/src
RUN npm install && npm start
RUN cd client && npm install && npm start
EXPOSE 3000
CMD ["node","server.js"]