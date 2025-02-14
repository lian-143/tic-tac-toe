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

  const getUserInput = function () {
    let numberOfRounds = 9;
    let player1Turn = true;

    for (let i = 0; i < numberOfRounds; i++) {
      const currentPlayer = player1Turn ? player1 : player2;
      let userInput = "X";

      if (makeMove(currentPlayer, userInput)) {
        currentPlayer.playerMoves.push(userInput);
        console.log(`${currentPlayer.name}: ${currentPlayer.playerMoves}`);
        if (determineWinner(currentPlayer)) {
          console.log("Game over");
          return;
        }
        player1Turn = !player1Turn;
      } else {
        console.log("Invalid move, try again.");
        i--;
      }
    }
    console.log("Game over! It's a draw.");
  };

  const makeMove = function (player, userInput) {
    // everytime player choose a number, the board updates and replaces number with symbol
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === userInput) {
          grid[i][j] = player.symbol;
          console.log(`${player.name} moves ${player.symbol}`);
          return true;
        }
      }
    }
    return false;
  };

  const determineWinner = function (player) {
    for (let i = 0; i < winningCombination.length; i++) {
      let matchCount = 0;
      for (let j = 0; j < winningCombination[i].length; j++) {
        if (player.playerMoves.includes(winningCombination[i][j])) {
          matchCount++;
        }
      }
      if (matchCount === 3) {
        console.log(`${player.name} won!`);
        return true;
      }
    }

    return false;
  };

  const btns = document.querySelectorAll(".btn");

  let play = btns.forEach((btn) => {
    btn.addEventListener("click", getUserInput());
  });

  return { getUserInput };
};

const game = gameController();
// game.getUserInput();
