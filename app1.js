var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "index1.html" ); 
});

io.on('connection', function(socket) {
   console.log('A user connected');

   //Send a message when 
   setInterval(function() {
      //Sending an object when emmiting an event
      socket.emit('event', { greetings: 'hello'+'<br>'});
   }, 4000);

   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(2000, function() {
   console.log('listening on localhost:2000');
});