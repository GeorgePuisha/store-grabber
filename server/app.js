
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('');
});

app.listen(3000, function () {
  console.log('http://localhost:3000/');
});
