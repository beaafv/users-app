FROM node:22

WORKDIR /users-app

COPY package*.json ./

RUN npm install


COPY . .


EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "users-app/index.js"]
