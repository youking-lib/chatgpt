const path = require('path')

module.exports = {
  apps: [
    {
      name: 'mtapp-servcies',
      script: path.resolve(__dirname, '../dist/index.js'),
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
