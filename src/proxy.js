var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(proxy('/web-a', {
    target: 'http://web-a:5000',
    changeOrigin: true,   // for vhosted sites
    pathRewrite: {
      '^/web-a': ''
    }
}));

app.use(proxy('/web-b', {
    target: 'http://web-b:5000',
    changeOrigin: true,   // for vhosted sites
    pathRewrite: {
      '^/web-b': ''
    }
}));

app.use(proxy('/web-c', {
    target: 'http://web-c:5000',
    changeOrigin: true,   // for vhosted sites
    pathRewrite: {
      '^/web-c': ''
    }
}));

app.listen(3000);
