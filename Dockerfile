FROM node:alpine

WORKDIR /app

RUN apk add --no-cache build-base python3 && \
    apk add --no-cache gcc g++

# COPY package*.json .
# RUN npm install

# COPY . .
