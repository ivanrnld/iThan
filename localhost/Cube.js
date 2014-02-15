// var Face = require('./Face.js');
// var Constant = require('./Constant.js');

function Cube()
{
	this.front = new Face(3);
	this.front.fillSingleColor(COLOR_RED);
	this.left = new Face(3);
	this.left.fillSingleColor(COLOR_BLUE);
	this.up = new Face(3);
	this.up.fillSingleColor(COLOR_YELLOW);
	this.down = new Face(3);
	this.down.fillSingleColor(COLOR_WHITE);
	this.right = new Face(3);
	this.right.fillSingleColor(COLOR_GREEN);
	this.back = new Face(3);
	this.back.fillSingleColor(COLOR_ORANGE);
	this.solved = [];
	this.havePowerUp = [];
	this.defend = [];
	for (var i = 0; i < 6; ++i)
	{
		this.solved[i] = false;
		this.havePowerUp[i] = false;
		this.defend[i] = false;
		this.isSolved = false;
	}
	this.numberOfSolves = 0;
}

Cube.prototype.X = function()
{
	var tmp = new Face(3);
	tmp.fillSetColor(this.up._colors);
	this.up = this.front;
	this.front = this.down;
	this.down = this.back;
	this.back = tmp;
	this.right.rotateCW();
	this.left.rotateCCW();
	this.back.reflectD();
	this.down.reflectD();
	//front OK
	//up OK
}

Cube.prototype.Y = function()
{
	var tmp = new Face(3);
	tmp.fillSetColor(this.front._colors);
	this.front = this.right;
	this.right = this.back;
	this.back = this.left;
	this.left = tmp;
	this.up.rotateCW();
	this.down.rotateCCW();
}

Cube.prototype.Z = function()
{
	var tmp = new Face(3);
	tmp.fillSetColor(this.up._colors);
	this.up = this.left;
	this.left = this.down;
	this.down = this.right;
	this.right = tmp;
	this.front.rotateCW();
	this.back.rotateCCW();
	this.right.rotateCW();
	this.left.rotateCW();
	this.up.rotateCW();
	this.down.rotateCW();
}

Cube.prototype.U = function()
{
	var tmp = new Face(3);
	tmp.fillSetColor(this.front._colors);
	this.front.updateRow(0,this.right.getRow(0));
	this.right.updateRow(0,this.back.getRow(0));
	this.back.updateRow(0,this.left.getRow(0));
	this.left.updateRow(0,tmp.getRow(0));
	this.up.rotateCW();
}

Cube.prototype.D = function()
{
	var tmp = new Face(3);
	tmp.fillSetColor(this.front._colors);
	this.front.updateRow(2,this.left.getRow(2));
	this.left.updateRow(2,this.back.getRow(2));
	this.back.updateRow(2,this.right.getRow(2));
	this.right.updateRow(2,tmp.getRow(2));	
	this.down.rotateCW();
}

Cube.prototype.L = function()
{
	this.Z(); this.U(); this.Z(); this.Z(); this.Z();
}

Cube.prototype.R = function()
{
	this.Z(); this.D(); this.Z(); this.Z(); this.Z();
}

Cube.prototype.F = function()
{
	this.X(); this.U(); this.X(); this.X(); this.X();
}

Cube.prototype.B = function()
{
	this.X(); this.X(); this.X(); this.U(); this.X();
}

Cube.prototype.check = function()
{
	var solved = true;
	if (this.front.checkSame() != -1 && !this.solved[this.front.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.front.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.front.checkSame() == -1) solved = false;
	if (this.left.checkSame() != -1 && !this.solved[this.left.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.left.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.left.checkSame() == -1) solved = false;
	if (this.up.checkSame() != -1 && !this.solved[this.up.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.up.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.up.checkSame() == -1) solved = false;
	if (this.down.checkSame() != -1 && !this.solved[this.down.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.down.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.down.checkSame() == -1) solved = false;
	if (this.right.checkSame() != -1 && !this.solved[this.right.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.right.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.right.checkSame() == -1) solved = false;
	if (this.back.checkSame() != -1 && !this.solved[this.back.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.back.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.back.checkSame() == -1) solved = false;

	if (solved) this.isSolved = 0;
}

Cube.prototype.move = function(moves)
{
	if (this.defend[1]) return;
	if (moves == "F1") { this.F(); }
	if (moves == "F3") { this.F(); this.F(); this.F(); }
	if (moves == "L1") { this.L(); }
	if (moves == "L3") { this.L(); this.L(); this.L(); }
	if (moves == "U1") { this.U(); }
	if (moves == "U3") { this.U(); this.U(); this.U(); }
	if (moves == "D1") { this.D(); }
	if (moves == "D3") { this.D(); this.D(); this.D(); }
	if (moves == "R1") { this.R(); }
	if (moves == "R3") { this.R(); this.R(); this.R(); }
	if (moves == "B1") { this.B(); }
	if (moves == "B3") { this.B(); this.B(); this.B(); }
	if (moves == "X")  { this.X(); }
	if (moves == "Y")  { this.Y(); }
	if (moves == "Z")  { this.Z(); }
}

Cube.prototype.debug = function()
{
	for (var i = 0; i < 3; ++i)
	{
		var s = "";
		for (var j = 0; j < 3; ++j) s = s + this.front._colors[i][j] + " ";
		console.log(s);
	}
	for (var i = 0; i < 3; ++i)
	{
		var s = "";
		for (var j = 0; j < 3; ++j) s = s + this.right._colors[i][j] + " ";
		console.log(s);
	}
	for (var i = 0; i < 3; ++i)
	{
		var s = "";
		for (var j = 0; j < 3; ++j) s = s + this.up._colors[i][j] + " ";
		console.log(s);
	}
}

Cube.prototype.scramble = function(numberOfMoves)
{
	for (var moves = 0; moves < numberOfMoves; ++moves)
	{
		var currentState = Math.floor((Math.random()*1000)+1) % 6;
		if (currentState == 0) this.F();
		if (currentState == 1) this.L();
		if (currentState == 2) this.U();
		if (currentState == 3) this.D();
		if (currentState == 4) this.R();
		if (currentState == 5) this.B();
	}
}

// module.exports = function(){
// 	return new Cube();
// }






