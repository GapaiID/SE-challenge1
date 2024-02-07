FROM node:20-alpine AS base

ENV NODE_ENV production
WORKDIR /app

COPY package*.json .
RUN npm ci --only=production

RUN ( wget -q -O /dev/stdout https://gobinaries.com/tj/node-prune | sh ) \
 && node-prune

FROM base AS build

ENV NODE_ENV development

COPY . .
RUN npm ci
RUN npm run build


FROM nginx:1.19.0

ENV NODE_ENV=production

WORKDIR /usr/share/nginx/html
COPY deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]