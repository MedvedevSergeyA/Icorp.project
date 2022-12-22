FROM node:14 as client

WORKDIR /app/client

COPY ../Desktop/Icorp.project-main/client/package.json /app/client

RUN npm install

COPY ../Desktop/Icorp.project-main/client /app/client

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY ../Desktop/Icorp.project-main/server/package.json /app

RUN npm install

COPY ../Desktop/Icorp.project-main/server /app

COPY --from=client /app/client/build /app/client

EXPOSE 8080

CMD [ "npm", "start" ]