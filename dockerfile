FROM trion/ng-cli as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci  --debug
COPY . .
RUN ng build --prod
EXPOSE 1243
CMD ["node", "server.js"]
