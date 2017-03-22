var TTTTest = require('./ttttest');


////////////////////////////////
//////// Example tests /////////
////////////////////////////////

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


/////////////////////////////////////////////
///// vvv Please do these problems vvv //////
/////////////////////////////////////////////

// 1. Write a test that proves the game can recognize when it is O's turn.

// 2. Write a test that proves the game can recognize when it is O's turn, but after one move has been made by X.

// 3. Write a test that proves the game rejects a board that is too short

// 4. Fix the code so as to make this pass
TTTTest('rejects an incorrect turn setting', {
  tictactoe: {
    board: 'XX O O O ',
    turn: 'D',
    logging: false
  },
  shouldThrow: true,
});

// 5. Write a test that proves the game rejects a board that has invalid symbols

// 6. Fix the code such that your test in 5 succeeds

// 7. Write a test that proves an invalid row position can not be submitted for a move

// 8. Fix any code that does not obey 7

// 9. Write three more relevant tests and fix any corresponding code that might be broken
