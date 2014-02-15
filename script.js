function lastObj() {
	this.move = "EMPTY";
}


function Face() {
	this.color = new Array(3);
	this.id = new Array(3);
	this.oritrans = new Array(3);
	this.lastmove = "EMPTY";
	for (var i = 0; i < 3; i++)
	{
		this.color[i] = new Array(3);
		this.id[i] = new Array(3);
		this.oritrans[i] = new Array(3);
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
	var x = new lastObj();
	this.front.lastmove = x;
	this.back.lastmove = x;
	this.left.lastmove = x;
	this.right.lastmove = x;
	this.up.lastmove = x;
	this.down.lastmove = x;
	this.lastmove = x;
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
	$('#'+id).css('transform-style', 'preserve-3d');
	$('#'+id).css('-webkit-transform', 'rotateX(-30deg) rotateY(-45deg)');
	$('#'+id).css('transform', 'rotateX(-30deg) rotateY(-45deg)');
	
	
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++)
		{
			
			this.front.setId(i, j, this.Id + "front" + i + j);
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
	$('#'+this.front.id[0][0]).addClass("ffront fleft fup");
	$('#'+this.front.id[0][1]).addClass("ffront fup fmid");
	$('#'+this.front.id[0][2]).addClass("fright fup ffront");
	$('#'+this.front.id[1][0]).addClass("ffront fleft fequ");
	$('#'+this.front.id[1][1]).addClass("fmid ffront fequ");
	$('#'+this.front.id[1][2]).addClass("fright fequ ffront");
	$('#'+this.front.id[2][0]).addClass("ffront fleft fdown");
	$('#'+this.front.id[2][1]).addClass("ffront fdown fmid");
	$('#'+this.front.id[2][2]).addClass("ffront fdown fright");
	$('#'+this.up.id[0][0]).addClass("fleft fback fup");
	$('#'+this.up.id[0][1]).addClass("fmid fup fback");
	$('#'+this.up.id[0][2]).addClass("fup fback fright");
	$('#'+this.up.id[1][0]).addClass("fstand fup fleft");
	$('#'+this.up.id[1][1]).addClass("fstand fmid fup");
	$('#'+this.up.id[1][2]).addClass("fright fstand fup");
	$('#'+this.up.id[2][0]).addClass("fleft fup ffront");
	$('#'+this.up.id[2][1]).addClass("fup ffront fmid");
	$('#'+this.up.id[2][2]).addClass("fup ffront fright");
	$('#'+this.right.id[0][0]).addClass("fup fright ffront");
	$('#'+this.right.id[0][1]).addClass("fup fright fstand");
	$('#'+this.right.id[0][2]).addClass("fup fright fback");
	$('#'+this.right.id[1][0]).addClass("ffront fequ fright");
	$('#'+this.right.id[1][1]).addClass("fright fequ fstand");
	$('#'+this.right.id[1][2]).addClass("fequ fback fright");
	$('#'+this.right.id[2][0]).addClass("fdown fright ffront");
	$('#'+this.right.id[2][1]).addClass("fdown fstand fright");
	$('#'+this.right.id[2][2]).addClass("fdown fback fright");
	$('#'+this.back.id[0][0]).addClass("fup fback fright");
	$('#'+this.back.id[0][1]).addClass("fmid fup fback");
	$('#'+this.back.id[0][2]).addClass("fleft fback fup");
	$('#'+this.back.id[1][0]).addClass("fright fback fequ");
	$('#'+this.back.id[1][1]).addClass("fmid fequ fback");
	$('#'+this.back.id[1][2]).addClass("fleft fequ fback");
	$('#'+this.back.id[2][0]).addClass("fright fback fdown");
	$('#'+this.back.id[2][1]).addClass("fmid fdown fback");
	$('#'+this.back.id[2][2]).addClass("fback fdown fleft");
	$('#'+this.left.id[0][0]).addClass("fleft fup fback");
	$('#'+this.left.id[0][1]).addClass("fleft fstand fup");
	$('#'+this.left.id[0][2]).addClass("fleft fup ffront");
	$('#'+this.left.id[1][0]).addClass("fequ fleft fback");
	$('#'+this.left.id[1][1]).addClass("fequ fleft fstand");
	$('#'+this.left.id[1][2]).addClass("fequ fleft ffront");
	$('#'+this.left.id[2][0]).addClass("fdown fleft fback");
	$('#'+this.left.id[2][1]).addClass("fdown fleft fstand");
	$('#'+this.left.id[2][2]).addClass("fdown fleft ffront");
	$('#'+this.down.id[0][0]).addClass("fdown ffront fleft");
	$('#'+this.down.id[0][1]).addClass("fdown ffront fmid");
	$('#'+this.down.id[0][2]).addClass("fdown ffront fright");
	$('#'+this.down.id[1][0]).addClass("fdown fstand fleft");
	$('#'+this.down.id[1][1]).addClass("fdown fstand fmid");
	$('#'+this.down.id[1][2]).addClass("fdown fstand fright");
	$('#'+this.down.id[2][0]).addClass("fdown fback fleft");
	$('#'+this.down.id[2][1]).addClass("fdown fback fmid");
	$('#'+this.down.id[2][2]).addClass("fdown fback fright");
}

Cube.prototype.revert = function() {
	//front
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			if ($('#'+this.front.id[i][j]).css("transform")!=this.front.oritrans[i][j])
			{
				var transform = this.front.oritrans[i][j];
				$('#'+this.front.id[i][j]).css("-webkit-transform",transform);
				$('#'+this.front.id[i][j]).css("transform",transform);
				$('#'+this.front.id[i][j]).css("z-index",1);
			}
		}
	}
	//back
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			if ($('#'+this.back.id[i][j]).css("transform")!=this.back.oritrans[i][j])
			{
				var transform = this.back.oritrans[i][j];
				$('#'+this.back.id[i][j]).css("-webkit-transform",transform);
				$('#'+this.back.id[i][j]).css("transform",transform);
				$('#'+this.back.id[i][j]).css("z-index",1);
			}
		}
	}
	//left
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			if ($('#'+this.left.id[i][j]).css("transform")!=this.left.oritrans[i][j])
			{
				var transform = this.left.oritrans[i][j];
				$('#'+this.left.id[i][j]).css("-webkit-transform",transform);
				$('#'+this.left.id[i][j]).css("transform",transform);
				$('#'+this.left.id[i][j]).css("z-index",1);
			}
		}
	}
	//right
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			if ($('#'+this.right.id[i][j]).css("transform")!=this.right.oritrans[i][j])
			{
				var transform = this.right.oritrans[i][j];
				$('#'+this.right.id[i][j]).css("-webkit-transform",transform);
				$('#'+this.right.id[i][j]).css("transform",transform);
				$('#'+this.right.id[i][j]).css("z-index",1);
			}
		}
	}
	//top
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			if ($('#'+this.up.id[i][j]).css("transform")!=this.up.oritrans[i][j])
			{
				var transform = this.up.oritrans[i][j];
				$('#'+this.up.id[i][j]).css("-webkit-transform",transform);
				$('#'+this.up.id[i][j]).css("transform",transform);
				$('#'+this.up.id[i][j]).css("z-index",1);
			}
		}
	}
	//bottom
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			if ($('#'+this.down.id[i][j]).css("transform")!=this.down.oritrans[i][j])
			{
				var transform = this.down.oritrans[i][j];
				$('#'+this.down.id[i][j]).css("-webkit-transform",transform);
				$('#'+this.down.id[i][j]).css("transform",transform);
				$('#'+this.down.id[i][j]).css("z-index",1);
			}
		}
	}
}

Cube.prototype.show = function() {
	//front
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "translateX(" + ((this.size*(j-1))+0) + "px) "
									+"translateY(" + ((this.size*(i-1))+0) + "px) "
									+"translateZ(" + (this.size * (3/2)+0) + "px) ";
			this.front.oritrans[i][j] = transform;
			$('#'+this.front.id[i][j]).css("-webkit-transform",transform);
			$('#'+this.front.id[i][j]).css("transform",transform);
			$('#'+this.front.id[i][j]).css("z-index",1);
		}
	}
	//back
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateY(180deg)"
									+"translateX(" + ((this.size*(j-1))+0) + "px) "
									+"translateY(" + ((this.size*(i-1))+0) + "px) "
									+"translateZ(" + (this.size * (3/2)+0) + "px) ";
			this.back.oritrans[i][j] = transform;
			$('#'+this.back.id[i][j]).css("-webkit-transform",transform);
			$('#'+this.back.id[i][j]).css("transform",transform);
			$('#'+this.back.id[i][j]).css("z-index",0);
		}
	}
	//left
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateY(-90deg)"
									+"translateX(" + ((this.size*(j-1))+0) + "px) "
									+"translateY(" + ((this.size*(i-1))+0) + "px) "
									+"translateZ(" + (this.size * (3/2)+0) + "px) ";
			this.left.oritrans[i][j] = transform;
			$('#'+this.left.id[i][j]).css("-webkit-transform",transform);
			$('#'+this.left.id[i][j]).css("transform",transform);
			$('#'+this.left.id[i][j]).css("z-index",0);
		}
	}
	//right
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateY(90deg)"
									+"translateX(" + ((this.size*(j-1))+0) + "px) "
									+"translateY(" + ((this.size*(i-1))+0) + "px) "
									+"translateZ(" + (this.size*(3/2)+0)+ "px) ";
			this.right.oritrans[i][j] = transform;
			$('#'+this.right.id[i][j]).css("-webkit-transform",transform);
			$('#'+this.right.id[i][j]).css("transform",transform);
			$('#'+this.right.id[i][j]).css("z-index",1);
		}
	}
	//top
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateX(90deg)"
									+"translateX(" + (this.size*(j-1)+0) + "px) "
									+"translateY(" + (this.size*(i-1)+0) + "px) "
									+"translateZ(" + (this.size*(3/2)+0) + "px) ";
			this.up.oritrans[i][j] = transform;
			$('#'+this.up.id[i][j]).css("-webkit-transform",transform);
			$('#'+this.up.id[i][j]).css("transform",transform);
			$('#'+this.up.id[i][j]).css("z-index",1);
		}
	}
	//bottom
	for (var i = 0; i < 3; i++)
	{
		for (var j = 0; j < 3; j++) 
		{
			transform = "rotateX(-90deg)"
									+"translateX(" + (this.size*(j-1)+0) + "px) "
									+"translateY(" + (this.size*(i-1)+0) + "px) "
									+"translateZ(" + (this.size * (3/2)+0) + "px) ";
			this.down.oritrans[i][j] = transform;
			$('#'+this.down.id[i][j]).css("-webkit-transform",transform);
			$('#'+this.down.id[i][j]).css("transform",transform);
			$('#'+this.down.id[i][j]).css("z-index",0);
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
	id = '#' + this.up.id[0][1];
	var a16 = id;
	$(id).hover (
		function() {
			addArrow($(a16));
			$('#up').click(function() {
				turnM(3);
			});
			$('#down').click(function() {
				turnM(1);
			});
			$('#left').click(function() {
				turnB(1);
			});
			$('#right').click(function() {
				turnB(3);
			});
		}, function(){
			removeArrow($(a16));
		}
	)
	id = '#' + this.up.id[1][0];
	var a17 = id;
	$(id).hover (
		function() {
			addArrow($(a17));
			$('#up').click(function() {
				turnL(3);
			});
			$('#down').click(function() {
				turnL(1);
			});
			$('#left').click(function() {
				turnS(3);
			});
			$('#right').click(function() {
				turnS(1);
			});
		}, function(){
			removeArrow($(a17));
		}
	)
	id = '#' + this.up.id[2][1];
	var a18 = id;
	$(id).hover (
		function() {
			addArrow($(a18));
			$('#up').click(function() {
				turnM(3);
			});
			$('#down').click(function() {
				turnM(1);
			});
			$('#left').click(function() {
				turnF(3);
			});
			$('#right').click(function() {
				turnF(1);
			});
		}, function(){
			removeArrow($(a18));
		}
	)
	id = '#' + this.up.id[1][2];
	var a19 = id;
	$(id).hover (
		function() {
			addArrow($(a19));
			$('#up').click(function() {
				turnR(1);
			});
			$('#down').click(function() {
				turnR(3);
			});
			$('#left').click(function() {
				turnS(3);
			});
			$('#right').click(function() {
				turnS(1);
			});
		}, function(){
			removeArrow($(a19));
		}
	)
	id = '#' + this.front.id[0][1];
	var a20 = id;
	$(id).hover (
		function() {
			addArrow($(a20));
			$('#up').click(function() {
				turnM(3);
			});
			$('#down').click(function() {
				turnM(1);
			});
			$('#left').click(function() {
				turnU(1);
			});
			$('#right').click(function() {
				turnU(3);
			});
		}, function(){
			removeArrow($(a20));
		}
	)
	id = '#' + this.front.id[1][0];
	var a21 = id;
	$(id).hover (
		function() {
			addArrow($(a21));
			$('#up').click(function() {
				turnL(3);
			});
			$('#down').click(function() {
				turnL(1);
			});
			$('#left').click(function() {
				turnE(3);
			});
			$('#right').click(function() {
				turnE(1);
			});
		}, function(){
			removeArrow($(a21));
		}
	)
	id = '#' + this.front.id[2][1];
	var a22 = id;
	$(id).hover (
		function() {
			addArrow($(a22));
			$('#up').click(function() {
				turnM(3);
			});
			$('#down').click(function() {
				turnM(1);
			});
			$('#left').click(function() {
				turnD(3);
			});
			$('#right').click(function() {
				turnD(1);
			});
		}, function(){
			removeArrow($(a22));
		}
	)
	id = '#' + this.front.id[1][2];
	var a23 = id;
	$(id).hover (
		function() {
			addArrow($(a23));
			$('#up').click(function() {
				turnR(1);
			});
			$('#down').click(function() {
				turnR(3);
			});
			$('#left').click(function() {
				turnE(3);
			});
			$('#right').click(function() {
				turnE(1);
			});
		}, function(){
			removeArrow($(a23));
		}
	)
	id = '#' + this.right.id[0][1];
	var a24 = id;
	$(id).hover (
		function() {
			addArrow($(a24));
			$('#up').click(function() {
				turnS(3);
			});
			$('#down').click(function() {
				turnS(1);
			});
			$('#left').click(function() {
				turnU(1);
			});
			$('#right').click(function() {
				turnU(3);
			});
		}, function(){
			removeArrow($(a24));
		}
	)
	id = '#' + this.right.id[1][0];
	var a25 = id;
	$(id).hover (
		function() {
			addArrow($(a25));
			$('#up').click(function() {
				turnF(3);
			});
			$('#down').click(function() {
				turnF(1);
			});
			$('#left').click(function() {
				turnE(3);
			});
			$('#right').click(function() {
				turnE(1);
			});
		}, function(){
			removeArrow($(a25));
		}
	)
	id = '#' + this.right.id[2][1];
	var a26 = id;
	$(id).hover (
		function() {
			addArrow($(a26));
			$('#up').click(function() {
				turnS(3);
			});
			$('#down').click(function() {
				turnS(1);
			});
			$('#left').click(function() {
				turnD(3);
			});
			$('#right').click(function() {
				turnD(1);
			});
		}, function(){
			removeArrow($(a26));
		}
	)
	id = '#' + this.right.id[1][2];
	var a27 = id;
	$(id).hover (
		function() {
			addArrow($(a27));
			$('#up').click(function() {
				turnB(1);
			});
			$('#down').click(function() {
				turnB(3);
			});
			$('#left').click(function() {
				turnE(3);
			});
			$('#right').click(function() {
				turnE(1);
			});
		}, function(){
			removeArrow($(a27));
		}
	)
}

initPower = function() {
	$('#power'+1).click(function() {
		usePower(1);
		removePower(1);
	});
	$('#power'+2).click(function() {
		usePower(2);
		removePower(2);
	});
	$('#power'+3).click(function() {
		usePower(3);
		removePower(3);
	});
	$('#power'+4).click(function() {
		usePower(4);
		removePower(4);
	});
	$('#power'+5).click(function() {
		usePower(5);
		removePower(5);
	});
}

addPower = function(x) {
	$('#power'+x).css('background-image','url(powerup'+x+'.png)');
}

removePower = function(x) {
	$('#power'+x).css('background-image','none');
	$('#power'+x).css('background-color','gray');
}

usePower = function(x) {
	console.log("P" + (x-1));
}
