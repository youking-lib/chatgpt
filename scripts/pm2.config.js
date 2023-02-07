const path = require('path')

module.exports = {
  apps: [
    {
      name: 'chatgpt-demo',
      script: path.resolve(__dirname, '../dist/index.js'),
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
