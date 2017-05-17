var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var os = require("os");

const SECRET = '🍪';

var hostname = os.hostname();
var app = express();

app.use(cookieParser(SECRET));
app.use(cookieSession({
  name: 'view-count',
  keys: [SECRET]
}));

app.get('/', function (req, res) {
  res.send('<html><body><p>Hello from Mothership container ' + hostname + '</p><iframe src="/web-a"></iframe><iframe src="/web-b"></iframe><iframe src="/web-c"></iframe></body></html>');
});

app.listen(5000);
console.log('Running on http://localhost');
