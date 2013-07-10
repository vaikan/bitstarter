var fs = require('fs');
var buffer = new Buffer(16);
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var content = fs.readFileSync('index.html', 'utf8');
  //console.log(content);
  buffer.toString(content, 'utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
