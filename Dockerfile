FROM node:16-alpine

WORKDIR /usr/src/app

# COPY ./package.json .

RUN npm install connect-history-api-fallback express serve-static

# RUN npm run build 

COPY . ./

EXPOSE 7000

CMD [ "node", "server.js"]