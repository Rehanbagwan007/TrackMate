# ---------- Build stage ----------
    FROM node:20-alpine AS build

    WORKDIR /usr/src/server
    
    COPY package*.json ./
    RUN npm install
    
    COPY . .
    
    # Prisma client generate
    RUN npx prisma generate
    
    # Compile TypeScript
    RUN npm run build
    
    
    # ---------- Production stage ----------
    FROM node:20-alpine
    
    WORKDIR /usr/src/server
    
    COPY package*.json ./
    RUN npm install --production
    
    # Copy compiled code + prisma
    COPY --from=build /usr/src/server/build ./build
    COPY --from=build /usr/src/server/prisma ./prisma
    
    EXPOSE 4000
    
    CMD ["npm", "start"]
    