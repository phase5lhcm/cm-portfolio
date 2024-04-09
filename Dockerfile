FROM node:18-alpine

WORKDIR /chrissy_portfolio

COPY public/ /chrissy_portfolio/public
COPY /src /chrissy_portfolio/src
COPY package.json /chrissy_portfolio/

RUN npm install

CMD ["npm", "start"]


