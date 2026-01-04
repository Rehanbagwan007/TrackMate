# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /usr/src/server

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client + build TS
RUN npx prisma generate
RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /usr/src/server

# Install production deps (includes @prisma/client)
COPY package*.json ./
RUN npm install --production

# Copy compiled code
COPY --from=build /usr/src/server/build ./build
COPY --from=build /usr/src/server/prisma ./prisma

# 🔥 VERY IMPORTANT: generate prisma client AGAIN
RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "start"]
