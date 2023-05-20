// var express = require('express');
// var app = express();
// var http = require('http');
// const server = http.createServer(app)
// var io = require('socket.io')(server);

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "index.html" ); 
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});


//here use server.listen if you are using the code commented at the top of this file
http.listen(2000, function() {
   console.log('listening on 2000');
});