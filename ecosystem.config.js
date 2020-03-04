// Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
module.exports = {
  apps: [
    {
      name: 'tbk',
      script: './bin/www',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '111.229.121.126',
      ref: 'origin/master',
      repo: 'https://github.com/fuzhongyi/tbk-service.git',
      path: '/var/www/tbk-service',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
