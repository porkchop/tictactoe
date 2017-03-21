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

function TicTacToe(opts) {
  opts = opts || {};
  this.board = opts.board || blankBoard.slice(0);
  this.turn = opts.turn || 'X';
  this.logging = !!opts.logging;
  console.assert(this.board.length === 9, 'Board length incorrect', this.board.length);
}

TicTacToe.prototype.resetBoard = function() {
  this.board = blankBoard.slice(0);
  this.turn = 'X';
}

TicTacToe.prototype.log = function() {
  if(this.logging) {
    console.log.apply(null, arguments);
  }
}

TicTacToe.prototype.addMove = function(r, c, tictac) {
  var i = r * 3 + c;

  this.log();
  this.log('Move: ', r, c, tictac)

  if(this.getStatus() !== tictac + 's turn' || this.board[i] !== ' ') {
    this.log('Failed');
    this.displayBoard();
    return false;
  }

  this.board = this.board.slice(0, i) + tictac + this.board.slice(i + 1);

  this.turn = tictac === 'X' ? 'O' : 'X';

  this.log('Worked');
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

 return this.turn  + 's turn';
}

TicTacToe.prototype.displayBoard = function() {
  var top = this.board.slice(0, 3).split('').join('|');
  var mid = this.board.slice(3, 6).split('').join('|');
  var bot = this.board.slice(6).split('').join('|');

  this.log(this.getStatus());
  this.log(top);
  this.log('-----');
  this.log(bot);
  this.log('-----');
  this.log(mid);
}



///////////////////////////////////////
//////////////// Tests ////////////////
///////////////////////////////////////

TTTTest('it sees Xs turn', {
  tictactoe: {
    board: 'XX O O O ',
    turn: 'X',
    logging: false
  },
  expectedStatus: 'Xs turn',
  shouldThrow: false,
});

TTTTest('it sees a winning move', {
  tictactoe: {
    board: 'XX   O O ',
    turn: 'O',
    logging: false
  },
  moves: [
    [1, 0, 'O'],
    [0, 2, 'X']
  ],
  expectedStatus: 'X wins',
  shouldThrow: false,
});

TTTTest('deliberately fails', {
  tictactoe: {
    board: 'XX O O O ',
    turn: 'X',
    logging: false
  },
  moves: [[0, 2, 'X']],
  expectedStatus: 'Impossible status',
  shouldThrow: false,
});

TTTTest('rejects a board that is too long', {
  tictactoe: {
    board: 'XX O O O  ',
    turn: 'X',
    logging: false
  },
  shouldThrow: true,
});

TTTTest('rejects an incorrect turn setting', {
  tictactoe: {
    board: 'XX O O O ',
    turn: 'D',
    logging: false
  },
  shouldThrow: true,
});


///////////////////////////////////////
///// vvv Your tests go here vvv //////
///////////////////////////////////////


///////////////////////////////////////
/// ^^^ Your tests go up there ^^^ ////
///////////////////////////////////////



///////////////////////////////////////
//////////// Test utility /////////////
///////////////////////////////////////

function TTTTest(description, opts) {
  console.assert(!!description, 'Description required');
  console.assert(!!opts, 'opts required');
  if(!(this instanceof TTTTest)) {
    return new TTTTest(description, opts);
  }
  this.tictactoe = opts.tictactoe;
  this.moves = opts.moves || [];
  this.expectedStatus = opts.expectedStatus;
  this.description = description;
  this.shouldThrow = opts.shouldThrow;

  // execute
  try {
    var tictactoe = new TicTacToe(this.tictactoe);

    for(i in this.moves) {
      var move = this.moves[i];
      tictactoe.addMove.apply(tictactoe, move);
    }

    if(this.shouldThrow) {
      console.log('test:', this.description, ': FAILED - should have thrown');
    } else {
      console.assert(this.expectedStatus === tictactoe.getStatus(), this.expectedStatus + ' !== ' + tictactoe.getStatus())
      console.log('test:', this.description, ': SUCCESS');
    }
  } catch(e) {
    if(this.shouldThrow) {
      console.log('test:', this.description, ': SUCCESS');
    } else {
      console.log('test:', this.description, ': FAILED', e.message);
    }
  }
}
