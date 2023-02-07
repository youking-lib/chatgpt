#!/bin/bash
set -e

# install pnpm
npm i -g pnpm
pnpm i

# build pkg
pnpm run build

# build web app
cd apps/mtapp-web
pnpm run build

cd -

# build backend
npx pm2 restart ./scripts/pm2.config.js --env production