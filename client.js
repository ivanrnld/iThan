var socket = io.connect('http://localhost:8080');
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
  socket.emit('move', {auth: auth, move: moveCommand});
}

socket.on('update', function(data){
  console.log(data);
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