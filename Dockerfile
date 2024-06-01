FROM node:latest

WORKDIR /weatherApp

COPY package*.json ./

RUN npm install

COPY . .

# RUN  npm run build

RUN npm install -g serve

EXPOSE 4000


CMD [ "npm", "run", "dev" ]