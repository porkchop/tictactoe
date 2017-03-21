
var TicTacToe = require('./tictactoe');

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

module.exports = TTTTest;
