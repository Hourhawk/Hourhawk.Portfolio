var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.send(__dirname + '/index.html');
});

http.listen(80, function(){
  console.log('listening on *:80');
});