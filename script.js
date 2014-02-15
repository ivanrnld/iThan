
function Face() {
	this.color = new Array(3);
	this.id = new Array(3);
	for (var i = 0; i < 3; i++)
	{
		this.color[i] = new Array(3);
		this.id[i] = new Array(3);
		for (var j = 0; j < 3; j++)
			this.color[i][j] = "#000000";
	}
}

Face.prototype.setColor = function(row, column, newcolor) {
	this.color[row][column] = newcolor;
	$('#' + this.id[row][column]).css("background-color",newcolor);
}

Face.prototype.setId = function(row, column, newId) {
	this.id[row][column] = newId;
}

function Cube(container, id) {
	this.front = new Face();
	this.back = new Face();
	this.left = new Face();
	this.right = new Face();
	this.up = new Face();
	this.down = new Face();
	this.container = container;
	this.Id = id;
	this.size = 100;
	
	jQuery('<div></div>', {
		id : this.Id
	}).appendTo("#" + container);
	
	$('#'+id).css('width', '100%');
	$('#'+id).css('height', '100%');
	$('#'+id).css('position', 'absolute');
	$('#'+id).css('-webkit-transform-style', 'preserve-3d');
	$('#'+id).css('-webkit-transform', 'rotateX(-30deg) rotateY(-45deg)');
	
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++)
		{
			
			this.front.setId(i, j, this.Id + "front" + i + j);
			console.log(this.Id);
			jQuery('<div></div>', {
				id : this.front.id[i][j]
			}).appendTo('#' + this.Id);
			this.front.setColor(i, j, "red");
			
			this.back.setId(i, j, this.Id + "back" + i + j);
			jQuery('<div></div>', {
				id: this.back.id[i][j]
			}).appendTo('#' + this.Id);
			this.back.setColor(i, j, "orange");
			
			this.left.setId(i, j, this.Id + "left" + i + j);
			jQuery('<div></div>', {
				id : this.left.id[i][j]
			}).appendTo('#' + this.Id);
			this.left.setColor(i, j, "blue");
			
			this.right.setId(i, j, this.Id + "right" + i + j);
			jQuery('<div></div>', {
				id : this.right.id[i][j]
			}).appendTo('#' + this.Id);
			this.right.setColor(i, j, "green");
			
			this.up.setId(i, j, this.Id + "up" + i + j);
			jQuery('<div></div>', {
				id : this.up.id[i][j]
			}).appendTo('#' + this.Id);
			this.up.setColor(i, j, "yellow");
			
			this.down.setId(i, j, this.Id +"down" + i + j);
			jQuery('<div></div>', {
				id : this.down.id[i][j]
			}).appendTo('#' + this.Id);
			this.down.setColor(i, j, "white");
		}
	}
}

Cube.prototype.show = function() {
	//front
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "translateX(" + (this.size*(j-1)) + "px) "
									+"translateY(" + (this.size*(i-1)) + "px) "
									+"translateZ(" + this.size * (3/2) + "px) ";
			$('#'+this.front.id[i][j]).css("-webkit-transform",transform);
		}
	}
	//back
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateY(180deg)"
									+"translateX(" + (this.size*(j-1)) + "px) "
									+"translateY(" + (this.size*(i-1)) + "px) "
									+"translateZ(" + this.size * (3/2) + "px) ";
			$('#'+this.back.id[i][j]).css("-webkit-transform",transform);
		}
	}
	//left
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateY(-90deg)"
									+"translateX(" + (this.size*(j-1)) + "px) "
									+"translateY(" + (this.size*(i-1)) + "px) "
									+"translateZ(" + this.size * (3/2) + "px) ";
			$('#'+this.left.id[i][j]).css("-webkit-transform",transform);
		}
	}
	//right
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateY(90deg)"
									+"translateX(" + (this.size*(j-1)) + "px) "
									+"translateY(" + (this.size*(i-1)) + "px) "
									+"translateZ(" + this.size * (3/2) + "px) ";
			$('#'+this.right.id[i][j]).css("-webkit-transform",transform);
		}
	}
	//top
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateX(90deg)"
									+"translateX(" + (this.size*(j-1)) + "px) "
									+"translateY(" + (this.size*(i-1)) + "px) "
									+"translateZ(" + this.size * (3/2) + "px) ";
			$('#'+this.up.id[i][j]).css("-webkit-transform",transform);
		}
	}
	//bottom
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateX(-90deg)"
									+"translateX(" + (this.size*(j-1)) + "px) "
									+"translateY(" + (this.size*(i-1)) + "px) "
									+"translateZ(" + this.size * (3/2) + "px) ";
			$('#'+this.down.id[i][j]).css("-webkit-transform",transform);
		}
	}
}

Cube.prototype.changeSize = function(newSize) {
	this.size = newSize;
	$('#'+this.container).css("width", 3 * newSize);
	$('#'+this.container).css("height", 3 * newSize);
	$('#'+this.Id + " div").css("width", newSize);
	$('#'+this.Id + " div").css("height", newSize);
}

addCirc = function(x) {
	x.append(jQuery('<img></img>',{
		src : 'circ.png',
		id : 'circ'
	}));
	$("#circ").css('position','absolute');
	$("#circ").css('width','100px');
	$("#circ").css('height','100px');
}

addArrow = function(x) {
	x.append(jQuery('<img></img>',{
		src : 'down.png',
		id : 'down'
	}));
	x.append(jQuery('<img></img>',{
		src : 'up.png',
		id : 'up'
	}));
	x.append(jQuery('<img></img>',{
		src : 'left.png',
		id : 'left'
	}));
	x.append(jQuery('<img></img>',{
		src : 'right.png',
		id : 'right'
	}));
	//position the arrows
	$("img").css('position','absolute');
	$("img").css('width','30px');
	$("img").css('height','30px');
	$("#down").css('left','33px');
	$("#down").css('top','66px');
	$("#up").css('left','33px');
	$("#up").css('top','0px');
	$("#left").css('left','0px');
	$("#left").css('top','33px');
	$("#right").css('left','66px');
	$("#right").css('top','33px');
}

removeArrow = function(x) {
	x.find("img").remove();
}

turnU = function(x) {
	console.log('U' + x);
}

turnD = function(x) {
	console.log('D' + x);
}

turnB = function(x) {
	console.log('B' + x);
}

turnF = function(x) {
	console.log('F' + x);
}

turnR = function(x) {
	console.log('R' + x);
}

turnL = function(x) {
	console.log('L' + x);
}

turnX = function() {
	console.log('X');
}

turnY = function() {
	console.log('Y');
}

turnZ = function() {
	console.log('Z');
}



Cube.prototype.addAllArrow = function() {
	var id;
	id = '#' + this.front.id[0][0];
	console.log(id);
	var a1 = id;
	$(id).hover (
		function() {
			addArrow($(a1));
			$('#up').click(function() {
				turnL(3);
			});
			$('#down').click(function() {
				turnL(1);
			});
			$('#left').click(function() {
				turnU(1);
			});
			$('#right').click(function() {
				turnU(3);
			});
		}, function(){
			removeArrow($(a1));
		}
	)
	id = '#' + this.front.id[0][2];
	var a2 = id;
	$(id).hover (
		function() {
			addArrow($(a2));
			$('#up').click(function() {
				turnR(1);
			});
			$('#down').click(function() {
				turnR(3);
			});
			$('#left').click(function() {
				turnU(1);
			});
			$('#right').click(function() {
				turnU(3);
			});
		}, function(){
			removeArrow($(a2));
		}
	)
	id = '#' + this.front.id[2][0];
	var a3 = id;
	$(id).hover (
		function() {
			addArrow($(a3));
			$('#up').click(function() {
				turnL(3);
			});
			$('#down').click(function() {
				turnL(1);
			});
			$('#left').click(function() {
				turnD(3);
			});
			$('#right').click(function() {
				turnD(1);
			});
		}, function(){
			removeArrow($(a3));
		}
	)
	id = '#' + this.front.id[2][2];
	var a4 = id;
	$(id).hover (
		function() {
			addArrow($(a4));
			$('#up').click(function() {
				turnR(1);
			});
			$('#down').click(function() {
				turnR(3);
			});
			$('#left').click(function() {
				turnD(3);
			});
			$('#right').click(function() {
				turnD(1);
			});
		}, function(){
			removeArrow($(a4));
		}
	)
	id = '#' + this.right.id[0][0];
	var a5 = id;
	$(id).hover (
		function() {
			addArrow($(a5));
			$('#up').click(function() {
				turnF(3);
			});
			$('#down').click(function() {
				turnF(1);
			});
			$('#left').click(function() {
				turnU(1);
			});
			$('#right').click(function() {
				turnU(3);
			});
		}, function(){
			removeArrow($(a5));
		}
	)
	id = '#' + this.right.id[0][2];
	var a6 = id;
	$(id).hover (
		function() {
			addArrow($(a6));
			$('#up').click(function() {
				turnB(1);
			});
			$('#down').click(function() {
				turnB(3);
			});
			$('#left').click(function() {
				turnU(1);
			});
			$('#right').click(function() {
				turnU(3);
			});
		}, function(){
			removeArrow($(a6));
		}
	)
	id = '#' + this.right.id[2][0];
	var a7 = id;
	$(id).hover (
		function() {
			addArrow($(a7));
			$('#up').click(function() {
				turnF(3);
			});
			$('#down').click(function() {
				turnF(1);
			});
			$('#left').click(function() {
				turnD(3);
			});
			$('#right').click(function() {
				turnD(1);
			});
		}, function(){
			removeArrow($(a7));
		}
	)
	id = '#' + this.right.id[2][2];
	var a8 = id;
	$(id).hover (
		function() {
			addArrow($(a8));
			$('#up').click(function() {
				turnB(1);
			});
			$('#down').click(function() {
				turnB(3);
			});
			$('#left').click(function() {
				turnD(3);
			});
			$('#right').click(function() {
				turnD(1);
			});
		}, function(){
			removeArrow($(a8));
		}
	)
	id = '#' + this.up.id[0][0];
	var a9 = id;
	$(id).hover (
		function() {
			addArrow($(a9));
			$('#up').click(function() {
				turnL(3);
			});
			$('#down').click(function() {
				turnL(1);
			});
			$('#left').click(function() {
				turnB(1);
			});
			$('#right').click(function() {
				turnB(3);
			});
		}, function(){
			removeArrow($(a9));
		}
	)
	id = '#' + this.up.id[2][0];
	var a10 = id;
	$(id).hover (
		function() {
			addArrow($(a10));
			$('#up').click(function() {
				turnL(3);
			});
			$('#down').click(function() {
				turnL(1);
			});
			$('#left').click(function() {
				turnF(3);
			});
			$('#right').click(function() {
				turnF(1);
			});
		}, function(){
			removeArrow($(a10));
		}
	)
	id = '#' + this.up.id[0][2];
	var a11 = id;
	$(id).hover (
		function() {
			addArrow($(a11));
			$('#up').click(function() {
				turnR(1);
			});
			$('#down').click(function() {
				turnR(3);
			});
			$('#left').click(function() {
				turnB(1);
			});
			$('#right').click(function() {
				turnB(3);
			});
		}, function(){
			removeArrow($(a11));
		}
	)
	id = '#' + this.up.id[2][2];
	var a12 = id;
	$(id).hover (
		function() {
			addArrow($(a12));
			$('#up').click(function() {
				turnR(1);
			});
			$('#down').click(function() {
				turnR(3);
			});
			$('#left').click(function() {
				turnF(3);
			});
			$('#right').click(function() {
				turnF(1);
			});
		}, function(){
			removeArrow($(a12));
		}
	)
	id = '#' + this.up.id[1][1];
	var a13 = id;
	$(id).hover (
		function() {
			addCirc($(a13));
			$('#circ').click(function() {
				turnY();
			});
		}, function() {
			removeArrow($(a13));
		}
	)
	id = '#' + this.front.id[1][1];
	var a14 = id;
	$(id).hover (
		function() {
			addCirc($(a14));
			$('#circ').click(function() {
				turnZ();
			});
		}, function() {
			removeArrow($(a14));
		}
	)
	id = '#' + this.right.id[1][1];
	var a15 = id;
	$(id).hover (
		function() {
			addCirc($(a15));
			$('#circ').click(function() {
				turnX();
			});
		}, function() {
			removeArrow($(a15));
		}
	)
}

