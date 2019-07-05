FROM node:10.15.3

# set working directory
WORKDIR /app/

COPY frontend/package.json /app

RUN npm install
RUN npm install -g @vue/cli

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]