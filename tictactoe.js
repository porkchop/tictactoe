var wins = [
  '???      ',
  '   ???   ',
  '      ???',
  '?   ?   ?',
  '  ? ? ?  ',
  '?  ?  ?  ',
  '  ?  ?  ?'
];

var blankBoard = '         ';
var board;

function findWin(boardMask) {
  for(var i in wins) {
    var win = wins[i];
    if(win === boardMask) {
      return true;
    }
  }

  return false;
}

function TicTacToe() {
  this.resetBoard();
}

TicTacToe.prototype.resetBoard = function() {
  this.board = blankBoard.slice(0);
  this.turn = 'X';
}

TicTacToe.prototype.addMove = function(r, c, tictac) {
  var i = r * 3 + c;
  if(this.getStatus() !== tictac + '\'s turn' || this.board[i] !== ' ') {
    this.displayBoard();
    return false;
  }

  this.board = this.board.slice(0, i) + tictac + this.board.slice(i + 1);

  this.turn = tictac === 'X' ? 'O' : 'X';

  this.displayBoard();

  return true;
}

TicTacToe.prototype.getStatus = function() {
 var allXsCopy = this.board.replace(/X/g, '?').replace(/O/g, ' ');
 var allOsCopy = this.board.replace(/O/g, '?').replace(/X/g, ' ');

 if(findWin(allXsCopy)) {
   return 'X wins';
 }

 if(findWin(allOsCopy)) {
   return 'O wins';
 }

 if(!this.board.includes(' ')) {
   return 'Draw';
 }

 return this.turn  + '\'s turn';
}

TicTacToe.prototype.displayBoard = function() {
  var top = this.board.slice(0, 3);
  var mid = this.board.slice(3, 6);
  var bot = this.board.slice(6);

  console.log(this.getStatus());
  console.log(top);
  console.log(bot);
  console.log(mid);
  console.log();
}


var t = new TicTacToe();

t.addMove(0, 1, 'C');
t.addMove(0, 1, 'O');
t.addMove(0, 1, 'X');
t.addMove(0, 2, 'X');
t.addMove(0, 2, 'O');
t.addMove(1, 1, 'X');
t.addMove(1, 1, 'O');
t.addMove(1, 2, 'O');
t.addMove(2, 1, 'X');
t.addMove(2, 2, 'O');
