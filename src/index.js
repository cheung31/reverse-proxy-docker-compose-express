var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var os = require("os");
var viewCountMiddleware = require('./viewCountMiddleware');

const SECRET = '🍪';

var hostname = os.hostname();
var app = express();

app.use(cookieParser(SECRET));
app.use(cookieSession({
  name: 'view-count',
  keys: [SECRET]
}));

app.use(viewCountMiddleware);

app.get('/', function (req, res) {
  console.log(req.headers);
  res.send('<html><body><p>Hello from Node.js container ' + hostname + '</p><p>View count: ' + req.session.count + '</p></body></html>');
});

app.listen(5000);
console.log('Running on http://localhost');
