// var io = require('socket.io').listen(8080);

// io.sockets.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(process.env.PORT,process.env.IP);

function handler (req, res) {
  fs.readFile(__dirname + '/indexServer.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var numPlayer = 0;
var auth1 = Math.floor(Math.random()*100000000);
var auth2 = -1;
while(auth2 == auth1){
  auth1 = Math.floor(Math.random()*100000000);
}
var clients = {};

var Game = require('./Game.js');
var Constant = require('./Constant.js');
var gameObject = Game();

io.sockets.on('connection', function (socket) {
  if(numPlayer < 2 && numPlayer >= 0){
    clients[numPlayer] = socket;
    if(numPlayer == 0){
      socket.emit('auth', { auth: auth1});

      clients[0].on('move', function(data){
        if(data["auth"] == auth1) gameObject.move(gameObject.Player1, data["move"]);
        clients[0].emit('update', {me: gameObject.Player1, enemy: gameObject.Player2});
      });
    }
    else{
      socket.emit('auth', {auth: auth2});

      clients[0].on('move', function(data){
        if(data["auth"] == auth1) gameObject.move(gameObject.Player1, data["move"]);
        clients[0].emit('update', {me: gameObject.Player1, enemy: gameObject.Player2});
        clients[1].emit('update', {me: gameObject.Player2, enemy: gameObject.Player1});
      });

      clients[1].on('move', function(data){
        if (data["auth"] == auth2) gameObject.move(gameObject.Player2, data["move"]);
        clients[0].emit('update', {me: gameObject.Player1, enemy: gameObject.Player2});
        clients[1].emit('update', {me: gameObject.Player2, enemy: gameObject.Player1});
      });
    }
  }

  else{
    // kick previous player
    clients[0] = clients[1];
    clients[1] = socket;

    clients[0].emit('auth', {auth: auth1});
    clients[1].emit('auth', {auth: auth2});

    clients[0].on('move', function(data){
      if(data["auth"] == auth1) gameObject.move(gameObject.Player1, data["move"]);
      clients[0].emit('update', {me: gameObject.Player1, enemy: gameObject.Player2});
      clients[1].emit('update', {me: gameObject.Player2, enemy: gameObject.Player1});
    });

    clients[1].on('move', function(data){
      if (data["auth"] == auth2) gameObject.move(gameObject.Player2, data["move"]);
      clients[0].emit('update', {me: gameObject.Player1, enemy: gameObject.Player2});
      clients[1].emit('update', {me: gameObject.Player2, enemy: gameObject.Player1});
    });
  }

  numPlayer++;
});



