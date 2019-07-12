FROM node:10.15.3

WORKDIR /app

RUN npm install -g @vue/cli && \
    npm install -g @vue/cli-init && \
    npm install -g @quasar/cli && \
    npm install -g yarn

COPY package*.json ./

COPY . .

EXPOSE 8080
