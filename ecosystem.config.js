module.exports = {
  apps: [{
    name: 'awsServer',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '52.220.46.164',
      key: '~/Freeman.pem',
      ref: 'origin/master',
      repo: 'git@github.com:xiongchenyu6/awsServer.git',
      path: '/home/ubuntu/awsServer',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
