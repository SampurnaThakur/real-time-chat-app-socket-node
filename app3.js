var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "index3.html" ); 
});

io.on('connection', function(socket) {
   socket.on('clientEvent', function(data) {
      console.log(data);
   });
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});