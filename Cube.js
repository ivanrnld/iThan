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
	this.attack = [];
	this.defend = [];
	for (var i = 0; i < 6; ++i)
	{
		this.solved[i] = false;
		this.havePowerUp[i] = false;
		this.attack[i] = false;
		this.defend[i] = false;
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

Cube.prototype.usePowerUp = function()
{		
	if (this.havePowerUp[x])
	{
		this.havePowerUp[x] = false;
	}
}

Cube.prototype.check = function()
{
	if (this.front.checkSame() != -1 && !this.solved[this.front.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.front.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.left.checkSame() != -1 && !this.solved[this.left.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.left.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.up.checkSame() != -1 && !this.solved[this.up.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.up.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.down.checkSame() != -1 && !this.solved[this.down.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.down.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.right.checkSame() != -1 && !this.solved[this.right.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.right.checkSame()] = true;
		++this.numberOfSolves;
	}
	if (this.back.checkSame() != -1 && !this.solved[this.back.checkSame()])
	{
		this.havePowerUp[this.numberOfSolves] = true;
		this.solved[this.back.checkSame()] = true;
		++this.numberOfSolves;
	}
}

Cube.prototype.send()
{
	var toSend = new Cube();
	toSend.front.fillSetColor(front._colors);
	toSend.left.fillSetColor(left._colors);
	toSend.up.fillSetColor(up._colors);
	toSend.down.fillSetColor(down._colors);
	toSend.right.fillSetColor(right._colors);
	toSend.back.fillSetColor(back._colors);
}









