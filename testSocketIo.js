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

var updatePlayer1;
var updatePlayer2;

io.sockets.on('connection', function (socket) {
  if(numPlayer < 2 && numPlayer >= 0){
    clients[numPlayer] = socket;
    if(numPlayer == 0){
      socket.emit('auth', { auth: auth1});

      // clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
      updatePlayer1Only();

      clients[0].on('operate', function(data){
        gameObject.operate(gameObject.Player1, gameObject.Player2, data["operate"]);
        clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
      });
    }
    else{
      socket.emit('auth', {auth: auth2});

      // clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
      // clients[1].emit('update', {me: gameObject.send(gameObject.Player2), enemy: gameObject.send(gameObject.Player1)});

      updateBothPlayers();

      clients[0].on('operate', function(data){
        gameObject.operate(gameObject.Player1, gameObject.Player2, data["operate"]);
        clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
        clients[1].emit('update', {me: gameObject.send(gameObject.Player2), enemy: gameObject.send(gameObject.Player1)});
      });

      clients[1].on('operate', function(data){
        gameObject.operate(gameObject.Player2, gameObject.Player1, data["operate"]);
        clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
        clients[1].emit('update', {me: gameObject.send(gameObject.Player2), enemy: gameObject.send(gameObject.Player1)});
      });
    }
  }

  else{
    // kick previous player
    clients[0] = clients[1];
    clients[1] = socket;

    clients[0].emit('auth', {auth: auth1});
    clients[1].emit('auth', {auth: auth2});

    // clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
    // clients[1].emit('update', {me: gameObject.send(gameObject.Player2), enemy: gameObject.send(gameObject.Player1)});

    updateBothPlayers();

    clients[0].on('operate', function(data){
      gameObject.operate(gameObject.Player1, gameObject.Player2, data["operate"]);
      clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
      clients[1].emit('update', {me: gameObject.send(gameObject.Player2), enemy: gameObject.send(gameObject.Player1)});
    });

    clients[1].on('operate', function(data){
      gameObject.operate(gameObject.Player2, gameObject.Player1, data["operate"]);
      clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
      clients[1].emit('update', {me: gameObject.send(gameObject.Player2), enemy: gameObject.send(gameObject.Player1)});
    });
  }

  numPlayer++;
});

function updateBothPlayers(){
  if(typeof updatePlayer1 != 'undefined' || typeof updatePlayer1 != 'null') clearInterval(updatePlayer1);
  if(typeof updatePlayer2 != 'undefined' || typeof updatePlayer2 != 'null') clearInterval(updatePlayer2);

  updatePlayer1 = setInterval(function(){
    clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
    if(gameObject.Player1.isSolved || gameObject.Player2.isSolved) clearInterval(updatePlayer1);
  }, 1000);
  updatePlayer2 = setInterval(function(){
    clients[1].emit('update', {me: gameObject.send(gameObject.Player2), enemy: gameObject.send(gameObject.Player1)});
    if(gameObject.Player1.isSolved || gameObject.Player2.isSolved) clearInterval(updatePlayer2);
  }, 1000);
}

function updatePlayer1Only(){
  if(typeof updatePlayer1 != 'undefined' || typeof updatePlayer1 != 'null') clearInterval(updatePlayer1);

  updatePlayer1 = setInterval(function(){
    clients[0].emit('update', {me: gameObject.send(gameObject.Player1), enemy: gameObject.send(gameObject.Player2)});
    if(gameObject.Player1.isSolved || gameObject.Player2.isSolved) clearInterval(updatePlayer1);
  }, 1000);
}


