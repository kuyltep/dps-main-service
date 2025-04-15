FROM node:slim-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production=false

COPY . .

RUN yarn prisma generate

RUN yarn build

CMD ["sh", "-c", "yarn db:deploy && yarn start:prod"]