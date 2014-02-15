import java.awt.*;
import java.util.*;

class Face
{
	Vector<Vector<Integer>> color = new Vector<Vector<Integer>>();
	Face()
	{
		color.clear();
		for (int i = 0; i < 3; ++i) 
		{
			Vector<Integer> tmp = new Vector<Integer>(); 
			tmp.clear();
			for (int j = 0; j < 3; ++j) tmp.add(0);
			color.add(tmp);
		}
	}
	Face(int x)
	{
		color.clear();
		for (int i = 0; i < 3; ++i) 
		{
			Vector<Integer> tmp = new Vector<Integer>(); 
			tmp.clear();
			for (int j = 0; j < 3; ++j) tmp.add(x);
			color.add(tmp);
		}
	}
	Face(Vector<Vector<Integer>> init)
	{
		color.clear();
		for (int i = 0; i < 3; ++i) 
		{
			Vector<Integer> tmp = new Vector<Integer>(); 
			tmp.clear();
			for (int j = 0; j < 3; ++j) tmp.add(init.get(i).get(j));
			color.add(tmp);
		}
	}
	Vector<Integer> getRow(int x) 
	{
		Vector<Integer> tmp = new Vector<Integer>();
		tmp.clear();
		for (int i = 0; i < 3; ++i)
				tmp.add(color.get(x).get(i));
		return tmp;
	}
	Vector<Integer> getColumn(int x) 
	{
		Vector<Integer> tmp = new Vector<Integer>();
		tmp.clear();
		for (int i = 0; i < 3; ++i)
			tmp.add(color.get(i).get(x));
		return tmp;
	}
	void updateRow(int x,Vector<Integer> toUpdate)
	{
		color.set(x,toUpdate);
	}
	void updateColumn(int x,Vector<Integer> toUpdate)
	{
		for (int i = 0; i < 3; ++i)
				color.get(i).set(x,toUpdate.get(i));
	}
	void RotateCW()
	{
		Vector<Vector<Integer>> tmp = new Vector<Vector<Integer>>();
		tmp.clear();
		for (int i = 0; i < 3; ++i) 
		{
			Vector<Integer> temp = new Vector<Integer>(); temp.clear();
			for (int j = 0; j < 3; ++j) temp.add(0);
			tmp.add(temp);
		}
		for (int i = 0; i < 3; ++i)
			for (int j = 0; j < 3; ++j)
				tmp.get(i).set(j,color.get(2-j).get(i));
		for (int i = 0; i < 3; ++i)
			for (int j = 0; j < 3; ++j)
				color.get(i).set(j,tmp.get(i).get(j));
	}
	void RotateCCW()
	{
		for (int i = 0; i < 3; ++i)
			RotateCW();
	}
	void ReflectD()
	{
		Vector<Vector<Integer>> tmp = new Vector<Vector<Integer>>();
		tmp.clear();
		for (int i = 0; i < 3; ++i) 
		{
			Vector<Integer> temp = new Vector<Integer>(); temp.clear();
			for (int j = 0; j < 3; ++j) temp.add(0);
			tmp.add(temp);
		}
		for (int i = 0; i < 3; ++i)
			for (int j = 0; j < 3; ++j)
				tmp.get(i).set(j,color.get(2-i).get(2-j));
		for (int i = 0; i < 3; ++i)
			for (int j = 0; j < 3; ++j)
				color.get(i).set(j,tmp.get(i).get(j));
	}
	int checkSame()
	{
		int topleft = color.get(0).get(0);
		for (int i = 0; i < 3; ++i)
			for (int j = 0; j < 3; ++j)
				if (color.get(i).get(j) != topleft) return -1;
		return topleft;
	}
}

class Cube
{
	Face front,back,left,right,up,down;
	boolean solved[] = new boolean[10];
	boolean havePowerUp[] = new boolean[10];
	int numberOfSolves;
	Cube()
	{
		front = new Face(0);
		left = new Face(1);
		up = new Face(2);
		down = new Face(3);
		right = new Face(4);
		back = new Face(5);	
		for (int i = 0; i < 6; ++i)
		{
			solved[i] = false;
			havePowerUp[i] = false;
		}
		numberOfSolves = 0;
	}
	void X()
	{
		Face tmp = new Face(up.color);
		up = front;
		front = down;
		down = back;
		back = tmp;
		right.RotateCW();
		left.RotateCCW();
		back.ReflectD();
		down.ReflectD();
		//front OK
		//up OK
	}
	void Y()
	{
		Face tmp = new Face(front.color);
		front = right;
		right = back;
		back = left;
		left = tmp;
		up.RotateCW();
		down.RotateCCW();
		//left OK
		//right OK
		//front OK
		//back OK
	}
	void Z()
	{
		Face tmp = new Face(up.color);
		up = left;
		left = down;
		down = right;
		right = tmp;
		front.RotateCW();
		back.RotateCCW();
		right.RotateCW();
		left.RotateCW();
		up.RotateCW();
		down.RotateCW();
	}
	void U()
	{
		Face tmp = new Face(front.color);
		front.updateRow(0,right.getRow(0));
		right.updateRow(0,back.getRow(0));
		back.updateRow(0,left.getRow(0));
		left.updateRow(0,tmp.getRow(0));
		up.RotateCW();
	}
	void D()
	{
		Face tmp = new Face(front.color);
		front.updateRow(2,left.getRow(2));
		left.updateRow(2,back.getRow(2));
		back.updateRow(2,right.getRow(2));
		right.updateRow(2,tmp.getRow(2));	
		down.RotateCW();
	}
	void L()
	{
		Z(); U(); Z(); Z(); Z();
	}
	void R()
	{
		Z(); D(); Z(); Z(); Z();
	}
	void F()
	{
		X(); U(); X(); X(); X();
	}
	void B()
	{
		X(); X(); X(); U(); X();
	}
	void usePowerUp(int x)
	{
		if (havePowerUp[x])
		{
			havePowerUp[x] = false;
		}
	}
	void check()
	{
		if (front.checkSame() != -1 && !solved[front.checkSame()])
		{
			havePowerUp[numberOfSolves] = true;
			solved[front.checkSame()] = true;
			++numberOfSolves;
		}
		if (left.checkSame() != -1 && !solved[left.checkSame()])
		{
			havePowerUp[numberOfSolves] = true;
			solved[left.checkSame()] = true;
			++numberOfSolves;
		}
		if (up.checkSame() != -1 && !solved[up.checkSame()])
		{
			havePowerUp[numberOfSolves] = true;
			solved[up.checkSame()] = true;
			++numberOfSolves;
		}
		if (down.checkSame() != -1 && !solved[down.checkSame()])
		{
			havePowerUp[numberOfSolves] = true;
			solved[down.checkSame()] = true;
			++numberOfSolves;
		}
		if (right.checkSame() != -1 && !solved[right.checkSame()])
		{
			havePowerUp[numberOfSolves] = true;
			solved[right.checkSame()] = true;
			++numberOfSolves;
		}
		if (back.checkSame() != -1 && !solved[back.checkSame()])
		{
			havePowerUp[numberOfSolves] = true;
			solved[back.checkSame()] = true;
			++numberOfSolves;
		}
	}
}

public class Server
{
	public static void main(String[] args)
	{
		Cube Cube1 = new Cube();
		Cube Cube2 = new Cube();
		Random rnd = new Random();
		for (int moves = 0; moves < 100; ++moves)
		{
			int x = rnd.nextInt(6);
			if (x == 0) 
			{
				Cube1.F();
				Cube2.F();
			}
			if (x == 1) 
			{
				Cube1.L();
				Cube2.L();
			}
			if (x == 2) 
			{
				Cube1.U();
				Cube2.U();
			}
			if (x == 3) 
			{
				Cube1.D();
				Cube2.D();
			}
			if (x == 4) 
			{
				Cube1.R();
				Cube2.R();
			}
			if (x == 5) 
			{
				Cube1.B();
				Cube2.B();
			}
		}
	}
}











