const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: 'https://www.easy-mock.com/mock/5d01db9b61dd9e4ba61e2117/reacts',
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
    //    cookieDomainRewrite: "http://localhost:3000"
    }));
};