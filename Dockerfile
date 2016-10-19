FROM node:latest

RUN npm install nodemon webpack -g
RUN mkdir /src

WORKDIR /src
COPY ./src/package.json /src
RUN npm install

CMD ["npm", "start"] 