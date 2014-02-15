var socket = io.connect('http://localhost:8080');
//   socket.on('update', function (data) {
//   console.log(data);
//   socket.emit('my other event', { my: 'data' });
// });

move = function(moveCommand){
  socket.emit('move', {move: moveCommand});
}

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