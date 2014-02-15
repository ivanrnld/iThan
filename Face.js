function Face(size){
  //this = this;
  this._colors = []; // array of array of string constant
  this._cubeSize = size; // size of cube
};

// Private functions
Face.prototype._clearColors = function(){
  this._colors = [];
}

// Constructors
Face.prototype.fillSingleColor = function(color){
  var i, j;
  this._clearColors();

  for(i = 0; i < this._cubeSize; i++)
  {
    var tmp = [];
    for (j = 0; j < this._cubeSize; j++) tmp.push(color); 
    this._colors.push(tmp);
  }
  //console.log(this._colors);
}

Face.prototype.fillSetColor = function(colorScheme){
  var i, j;
  this._clearColors();
  for (i = 0; i < this._cubeSize; i++) 
  {
    var tmp = [];
    for (j = 0; j < this._cubeSize; j++) tmp.push(colorScheme[i][j]);
    this._colors.push(tmp);
  }
}

Face.prototype.getRow = function(numRow){
  var i;
  var row = [];

  for(i = 0; i < this._cubeSize; i++){
    row.push(this._colors[numRow][i]);
  } 

  return row;
}

Face.prototype.getColumn = function(numCol){
  var i;
  var column = [];

  for(i = 0; i < this._cubeSize; i++){
    column.push(this._colors[i][numCol]);
  } 

  return column;
}

Face.prototype.updateRow = function(numRow, toUpdate){
  var i;

  for(i = 0; i < this._cubeSize; i++){
    this._colors[numRow][i] = toUpdate[i];
  }
}

Face.prototype.updateColumn = function(numCol, toUpdate){
  var i;
  var column = [];

  for(i = 0; i < this._cubeSize; i++){
    this._colors[i][numCol] = toUpdate[i];
  }
}

Face.prototype.rotateCW = function(){
  var i, j;
  var tmp = [];

  for (i = 0; i < this._cubeSize; i++) {
    var temp = [];
    for (j = 0; j < this._cubeSize; j++) temp.push("");
    tmp.push(temp);
  }
  for (i = 0; i < this._cubeSize; i++) {
    for (j = 0; j < this._cubeSize; j++){
      tmp[i][j] = this._colors[this._cubeSize-1-j][i];
    }
  }
  // Copy tmp to _colors
  for (i = 0; i < this._cubeSize; i++) {
    for (j = 0; j < this._cubeSize; j++){
      this._colors[i][j] = tmp[i][j];
    }
  }
}

Face.prototype.rotateCCW = function(){
  this.rotateCW();
  this.rotateCW();
  this.rotateCW();
}

Face.prototype.reflectD = function(){
  this.rotateCW();
  this.rotateCW();
}

Face.prototype.checkSame = function(){
  var topleft = this._colors[0][0];
  var i,j;
  for (i = 0; i < _cubeSize; ++i)
    for (j = 0; j < _cubeSize; ++j)
      if (this._colors[i][j] != topleft) return -1;
    return topleft;
}








