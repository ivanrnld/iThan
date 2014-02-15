function Game()
{
	this.Player1 = new Cube();
	this.Player2 = new Cube();
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














