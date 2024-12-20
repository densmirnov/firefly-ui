
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Используем статический сервер для раздачи собранного UI
RUN npm install -g serve
EXPOSE 3052
CMD ["serve", "-s", "build"]

