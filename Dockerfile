FROM node:22-alpine AS base

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install