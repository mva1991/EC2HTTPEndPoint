module.exports = {
  apps: [{
    name: 'TCPWave EC2 HTTPEndPoint',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'http://ec2-54-227-181-101.compute-1.amazonaws.com/',
      key: 'C:\Users\vinay\Documents\TCPWave\AWS\TCPWaveEC2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:mva1991/EC2HTTPEndPoint.git',
      path: '/home/ubuntu/EC2HTTPEndPoint',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}