var express = require('express');
var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/weba', {
    target: 'http://weba:5000',
    changeOrigin: true,   // for vhosted sites
    pathRewrite: {
      '^/weba': ''
    }
});

var app = express();

app.use(apiProxy);
app.listen(3000);
