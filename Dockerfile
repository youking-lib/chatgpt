FROM node:18.12.1-alpine3.16
WORKDIR /chatgpt

EXPOSE 3003

COPY ./ .

RUN npm install -g pnpm pm2
RUN pnpm i

CMD ["npm","start"]
CMD ["node", "dist/index.js"]
