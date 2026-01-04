# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /usr/src/server

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /usr/src/server

COPY package*.json ./
RUN npm install --production

COPY --from=build /usr/src/server/build ./build
COPY --from=build /usr/src/server/prisma ./prisma
COPY --from=build /usr/src/server/node_modules/.prisma ./node_modules/.prisma

EXPOSE 4000

CMD ["npm", "start"]
