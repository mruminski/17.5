const express = require('express');
const app = express();

app.use('/store', function(req, res, next) {
  console.log('I am a middleware for request /store');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/store', function(req, res) {
  res.send('This is a store');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry I cannot find it');
});

app.listen(3000);