var socket = io.connect('https://fbhack-c9-nathanajah.c9.io');
//   socket.on('update', function (data) {
//   console.log(data);
//   socket.emit('my other event', { my: 'data' });
// });
var auth = 0;
socket.on('auth', function(data){
  auth = data["auth"];
  // socket.emit('ack', true);
});

move = function(moveCommand){

  console.log("Client: " + auth);
  socket.emit('operate', {auth: auth, operate: moveCommand});
}

socket.on('update', function(data){
  var i,j;

  console.log(data);
  for (i = 0; i < 5; ++i)
      if (data["me"].havePowerUp[i])
          addPower(i+1);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      player.front.setColor(i, j, data["me"].front._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      player.back.setColor(i, j, data["me"].back._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      player.left.setColor(i, j, data["me"].left._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      player.right.setColor(i, j, data["me"].right._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      player.up.setColor(i, j, data["me"].up._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      player.down.setColor(i, j, data["me"].down._colors[i][j]);

  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      enemy.front.setColor(i, j, data["enemy"].front._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      enemy.back.setColor(i, j, data["enemy"].back._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      enemy.left.setColor(i, j, data["enemy"].left._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      enemy.right.setColor(i, j, data["enemy"].right._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      enemy.up.setColor(i, j, data["enemy"].up._colors[i][j]);
  for (i = 0; i < 3; ++i)
    for (j = 0; j < 3; ++j)
      enemy.down.setColor(i, j, data["enemy"].down._colors[i][j]);
});

removeArrow = function(x) {
  x.find("img").remove();
}

turnU = function(x) {
  move('U'+x);
  console.log('U' + x);
}

turnD = function(x) {
  move('D'+x);
  console.log('D' + x);
}

turnB = function(x) {
  move('B'+x);
  console.log('B' + x);
}

turnF = function(x) {
  move('F'+x);
  console.log('F' + x);
}

turnR = function(x) {
  move('R'+x);
  console.log('R' + x);
}

turnL = function(x) {
  move('L'+x);
  console.log('L' + x);
}

turnX = function() {
  move('X');
  console.log('X');
}

turnY = function() {
  move('Y');
  console.log('Y');
}

turnZ = function() {
  move('Z');
  console.log('Z');
}

turnM = function(x) {
	move('M' + x);
	console.log('M' + x);
}

turnE = function(x) {
	move('E' + x);
	console.log('E' + x);
}

turnS = function(x) {
	move('S' + x);
	console.log('S' + x);
}

usePower = function(x) {
  //NOTE : ONE BASED
  move('P' + (x-1));
  console.log("P" + (x-1));
}