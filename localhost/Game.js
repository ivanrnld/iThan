// var Cube = require('./Cube.js');
// var Constant = require('./Constant.js');

function Game()
{
	this.Player1 = new Cube();
	this.Player2 = new Cube();
	//this.scramble();
}

Game.prototype.scramble = function()
{
	for (var moves = 0; moves < 1000; ++moves)
	{
		var currentState = Math.floor((Math.random()*1000)+1) % 6;
		if (currentState == 0)
		{
			this.Player1.F();
			this.Player2.F();
		}
		if (currentState == 1)
		{
			this.Player1.L();
			this.Player2.L();
		}
		if (currentState == 2)
		{
			this.Player1.U();
			this.Player2.U();
		}
		if (currentState == 3)
		{
			this.Player1.D();
			this.Player2.D();
		}
		if (currentState == 4)
		{
			this.Player1.R();
			this.Player2.R();
		}
		if (currentState == 5)
		{
			this.Player1.B();
			this.Player2.B();
		}
	}
}

Game.prototype.usePowerUp = function(playerAttack,playerDefend,powerUpIndex)
{
	if (playerAttack.havePowerUp[powerUpIndex])
	{
		playerAttack.havePowerUp[powerUpIndex] = false;
		playerDefend.defend[powerUpIndex] = true;
		if (powerUpIndex == 0)
		{
			setTimeout(function(){playerDefend.defend[powerUpIndex] = false;},5000);
		}
		if (powerUpIndex == 1 || powerUpIndex == 3)
		{
			setTimeout(function(){playerDefend.defend[powerUpIndex] = false;},3000);	
		}
		if (powerUpIndex == 2 || powerUpIndex == 3)
		{
			playerDefend.scramble(3);
		}
		if (powerUpIndex == 4)
		{
			playerDefend.scramble(1000);
		}
	}
	playerDefend.check();
}

Game.prototype.send = function(player)
{
	var toSend = new Cube();
	toSend.front.fillSetColor(player.front._colors);
	toSend.left.fillSetColor(player.left._colors);
	toSend.up.fillSetColor(player.up._colors);
	toSend.down.fillSetColor(player.down._colors);
	toSend.right.fillSetColor(player.right._colors);
	toSend.back.fillSetColor(player.back._colors);
	toSend.isSolved = player.isSolved;
	for (var i = 0; i < 6; ++i)
		toSend.havePowerUp[i] = player.havePowerUp[i];
	if (player.defend[0] || player.defend[3])
	{
		for (var i = 0; i < 3; ++i)
			for (var j = 0; j < 3; ++j)
			{
				toSend.front._colors[i][j] = COLOR_BLACK;
				toSend.left._colors[i][j] = COLOR_BLACK;
				toSend.up._colors[i][j] = COLOR_BLACK;
				toSend.down._colors[i][j] = COLOR_BLACK;
				toSend.right._colors[i][j] = COLOR_BLACK;
				toSend.back._colors[i][j] = COLOR_BLACK;
			}
	}
	return toSend;
}

Game.prototype.move = function(player,moves)
{
	player.move(moves);
	player.check();
}

Game.prototype.operate = function(playerAttack,playerDefend,moves)
{
	if (moves[0] == "P")
	{
		var x = moves[1] - '0';
		this.usePowerUp(playerAttack,playerDefend,x);
	} else
	{
		this.move(playerAttack,moves);
	}
}

// module.exports = function(){
// 	return new Game();
// }









