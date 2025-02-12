const gameController = function () {
  let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const player1 = {
    name: "Player1",
    symbol: "X",
    playerMoves: [],
  };

  const player2 = {
    name: "Player 2",
    symbol: "O",
    playerMoves: [],
  };

  const winningCombination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const determineWinner = function (player) {
    // horizontal
    for (let i = 0; i < winningCombination.length; i++) {
      let matchCount = 0;
      for (let j = 0; j < winningCombination[i].length; j++) {
        if (player.playerMoves.includes(winningCombination[i][j])) {
          matchCount++;
        }
      }
      if (matchCount === 3) {
        console.log(`${player.name} won!`);
        return `${player.name} won`;
      }
    }
    return "no winner";
  };

  const getUserInput = function () {
    let numberOfRounds = 9;
    let player1Turn = true;

    for (let i = 0; i < numberOfRounds; i++) {
      const currentPlayer = player1Turn ? player1 : player2;
      let userInput = Number(
        window.prompt(
          `${currentPlayer.name}: Choose number between 1-9 to place your symbol.`
        )
      );

      if (makeMove(currentPlayer, userInput)) {
        determineWinner(currentPlayer);
        player1Turn = !player1Turn;
        console.log(`${currentPlayer.name} move: ${userInput}`);
      } else {
        i--;
      }
    }
    console.log("Game over");
  };

  const makeMove = function (player, userInput) {
    // everytime player choose a number, the board updates and replaces number with symbol
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === userInput) {
          grid[i][j] = player.symbol;
          player.playerMoves.push(userInput);
          // console.log(grid);
          return true;
        }
      }
    }
    console.log("Invalid move");
    return false;
  };

  return { getUserInput, grid, determineWinner, winningCombination };
};

const game = gameController();
// console.log(game.determineWinner(grid, winningCombination));
console.log(game.grid);
// game.getUserInput();

/*
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];1

const winningCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let player1Moves = [1, 5, 9]; // Example moves for Player 1
let player2Moves = [2, 4, 6]; // Example moves for Player 2

const determineWinner = function (playerMoves) {
  // horizontal
  for (let i = 0; i < winningCombination.length; i++) {
    let matchCount = 0;
    for (let j = 0; j < winningCombination[i].length; j++) {
      if (playerMoves.includes(winningCombination[i][j])) {
        matchCount++;
      }
    }
    if (matchCount === 3) {
      console.log("it worked");
      return "winner";
    }
  }
  return "no winner";
};

console.log(determineWinner(player2Moves)); */
