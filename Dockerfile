FROM node

WORKDIR /app

COPY . .

RUN cd client && npm i && npm run start:prod && cd ../server && npm i

EXPOSE 8080

CMD cd server && npm run all