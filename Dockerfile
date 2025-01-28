# Stage 1: Build the Next.js app
FROM node:22-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run the Next.js app
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./

RUN npm install --production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]