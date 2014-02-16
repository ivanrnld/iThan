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
	console.log(moveCommand);
  console.log("Client: " + auth);
  socket.emit('operate', {auth: auth, operate: moveCommand});
}

socket.on('update', function(data){
  var i,j;

  console.log(data);
	if (data["me"].isSolved) {
		var x = jQuery('<div>YOU WIN!</div>', {
		});
		x.addClass('result');
		x.css('position','absolute');
		x.css('width','500px');
		x.css('height','100px');
		x.css('background-color','gray');
		x.css('font-size','70px');
		x.css('text-align','center');
		x.css('z-index','2');
		$('#playerscreen').append(x);
		console.log(x.css('height'));
	}
	else if (data["enemy"].isSolved) {
		var x = jQuery('<div>YOU LOSE!</div>', {
		});
		x.addClass('result');
		console.log(x.attr("class"));
		x.css('position','absolute');
		x.css('width','500px');
		x.css('height','100px');
		x.css('background-color','gray');
		x.css('font-size','70px');
		x.css('text-align','center');
		x.css('z-index','2');
		$('#playerscreen').append(x);
		console.log(x.css('height'));
	}
	else {
		$('.result').each(function() {
			($(this)).remove();
		});
	}
  for (i = 0; i < 5; ++i)
      if (data["me"].havePowerUp[i])
          addPower(i+1);
	var canChange = false;
	for (i = 0; i < 3; ++i)
		for (j = 0; j < 3; ++j)
		{
			if (player.front.color[i][j] !=data["me"].front._colors[i][j])
				canChange = true;
			if (player.back.color[i][j] !=data["me"].back._colors[i][j])
				canChange = true;
			if (player.left.color[i][j] !=data["me"].left._colors[i][j])
				canChange = true;
			if (player.right.color[i][j] !=data["me"].right._colors[i][j])
				canChange = true;
			if (player.up.color[i][j] !=data["me"].up._colors[i][j])
				canChange = true;
			if (player.down.color[i][j] !=data["me"].down._colors[i][j])
				canChange = true;
		}
	if (canChange)
	{
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
	$('#cube .fup').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .fdown').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .fback').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .ffront').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .fleft').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .fright').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .fmid').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .fequ').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	$('#cube .fstand').each(function() {
		$(this).css('transition-duration','0.0s');
	});
	player.revert();
	}
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
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fup').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateY(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fup').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateY(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
  move('U'+x);
  console.log('U' + x);
}

turnD = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fdown').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateY(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fdown').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateY(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
  move('D'+x);
  console.log('D' + x);
}

turnB = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fback').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateZ(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fback').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateZ(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
  move('B'+x);
  console.log('B' + x);
}

turnF = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .ffront').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateZ(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .ffront').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateZ(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
  move('F'+x);
  console.log('F' + x);
}

turnR = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fright').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateX(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fright').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateX(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
  move('R'+x);
  console.log('R' + x);
}

turnL = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fleft').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateX(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fleft').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateX(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
  move('L'+x);
  console.log('L' + x);
}

turnX = function() {
	if (!player.check())
		return;
	$('#cube div').each(function() {
		$(this).css('transition-property','transform');
		$(this).css('transition-duration','0.1s');
		var y = $(this).css('transform');
		y = 'rotateX(90deg) ' + y;
		$(this).css('transform',y);
	});
  move('X');
  console.log('X');
}

turnY = function() {
	if (!player.check())
		return;
	$('#cube div').each(function() {
		$(this).css('transition-property','transform');
		$(this).css('transition-duration','0.1s');
		var y = $(this).css('transform');
		y = 'rotateY(-90deg) ' + y;
		$(this).css('transform',y);
	});
  move('Y');
  console.log('Y');
}

turnZ = function() {
	if (!player.check())
		return;
	$('#cube div').each(function() {
		$(this).css('transition-property','transform');
		$(this).css('transition-duration','0.1s');
		var y = $(this).css('transform');
		y = 'rotateZ(90deg) ' + y;
		$(this).css('transform',y);
	});
  move('Z');
  console.log('Z');
}

turnM = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fmid').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateX(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fmid').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateX(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	move('M' + x);
	console.log('M' + x);
}

turnE = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fequ').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateY(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fequ').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateY(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	move('E' + x);
	console.log('E' + x);
}

turnS = function(x) {
	if (!player.check())
		return;
	if (x==3)
	{
		$('#cube .fstand').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateZ(-90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	else
	{
		$('#cube .fstand').each(function() {
			$(this).css('transition-property','transform');
			$(this).css('transition-duration','0.1s');
			var y = $(this).css('transform');
			y = 'rotateZ(90deg) ' + y;
			$(this).css('transform',y);
		});
	}
	move('S' + x);
	console.log('S' + x);
}

restart = function() {
  socket.emit('restart', {auth: auth});
	$('.result').remove();
	console.log("RESTARTING");
}

usePower = function(x) {
  //NOTE : ONE BASED
  move('P' + (x-1));
  console.log("P" + (x-1));
}