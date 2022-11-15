FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./public ./public
COPY ./src ./src
COPY ./client/package.json ./client/package.json
COPY ./client/public ./client/public
COPY ./client/src ./client/src
RUN npm run build
RUN cd client && npm run build
EXPOSE 3000
CMD ["node","server.js"]