FROM node

WORKDIR /app

COPY client/package.json ./client

RUN npm i && npm run start:prod

COPY server/package.json ./server

RUN npm i

COPY . .

CMD [ "cd", "server", "&&", "npm", "start" ]