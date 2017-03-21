TTTTest = require('./ttttest');


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
