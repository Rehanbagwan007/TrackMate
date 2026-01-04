# ---------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /usr/src/server
COPY package*.json ./
RUN npm install
COPY . .
# Generates to /usr/src/server/src/generated
RUN npx prisma generate 
RUN npm run build

# ---------- Production stage ----------
FROM node:20-alpine
WORKDIR /usr/src/server
COPY package*.json ./
# Install only production dependencies
RUN npm install --omit=dev

# Copy compiled JS
COPY --from=build /usr/src/server/build ./build
# Copy the prisma folder (needed for the runtime engine)
COPY --from=build /usr/src/server/prisma ./prisma
# VERY IMPORTANT: Copy the generated client from the build stage
COPY --from=build /usr/src/server/src/generated ./src/generated

# Re-run generate to ensure the engine (linux-musl) matches the Alpine OS
RUN npx prisma generate

EXPOSE 4000
CMD ["npm", "start"]
