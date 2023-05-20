var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "Broadcast.html" ); 
});

var clients = 0;
io.on('connection', function(socket) {
   //try to use socket instead of io. You will see the difference that io.emit broadcasts to all clients but socket will emit to only specific clients
   clients++;
      io.emit('broadcast',{ msg: clients + ' clients connected!'});
socket.on('disconnect', function () {
      clients--;
      io.emit('broadcast',{ msg: clients + ' clients connected!'});
   });
});

http.listen(2000, function() {
   console.log('listening on localhost:2000');
});
//PS C:\Users\User\Downloads\sockets> npm i
// npm ERR! code ENOENT
// npm ERR! syscall open
// npm ERR! path C:\Users\User\Downloads\sockets/package.json
// npm ERR! errno -4058
// npm ERR! enoent ENOENT: no such file or directory, open 'C:\Users\User\Downloads\sockets\package.json'
// npm ERR! enoent This is related to npm not being able to find a file.

// npm ERR! A complete log of this run can be found in:
// npm ERR!     C:\Users\User\AppData\Local\npm-cache\_logs\2023-05-03T20_38_55_612Z-debug-0.log
// PS C:\Users\User\Downloads\sockets> npm i express

// added 57 packages, and audited 58 packages in 3s

// 7 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\User\Downloads\sockets> node app.js
// node:internal/modules/cjs/loader:988
//   throw err;
//   ^

// Error: Cannot find module 'socket.io'
// Require stack:
// - C:\Users\User\Downloads\sockets\app.js
//     at Function.Module._resolveFilename (node:internal/modules/cjs/loader:985:15)
//     at Module.require (node:internal/modules/cjs/loader:1057:19)
//     at require (node:internal/modules/cjs/helpers:103:18)
//     at Object.<anonymous> (C:\Users\User\Downloads\sockets\app.js:10:10)
//     at Module._compile (node:internal/modules/cjs/loader:1155:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
//     at Module.load (node:internal/modules/cjs/loader:1033:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:868:12)
//   code: 'MODULE_NOT_FOUND',
//   requireStack: [ 'C:\\Users\\User\\Downloads\\sockets\\app.js' ]
// }
// PS C:\Users\User\Downloads\sockets> npm i socket.io

// added 20 packages, and audited 78 packages in 3s

//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\User\Downloads\sockets> npm i http

// added 1 package, and audited 79 packages in 2s

// 7 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\User\Downloads\sockets> node app.js
// listening on 2000
// A user connected
// A user disconnected
// A user connected

