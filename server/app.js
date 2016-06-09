var express = require('express');
var path = require('path');
var app = express();

// static files
app.use(express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));


app.get('/', function (req, res) {
  res.sendfile('./client/index.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});