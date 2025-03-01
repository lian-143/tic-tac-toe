// the gameboard of game
const gameBoardModule = (function () {
  let gameBoard = Array(9).fill("");
  return { gameBoard };
})();

function createPlayer(playerName, playerNumber, playerSymbol, playerMoves) {
  return {
    playerName: playerName,
    playerNumber: playerNumber,
    playerSymbol: playerSymbol,
    playerMoves: playerMoves,
  };
}

// logic for playing the game and checking for the players' turns
const displayControllerModule = (function () {
  let player1Turn = true;
  const player1 = createPlayer("Player 1", 1, "X", []);
  const player2 = createPlayer("Player 2", 2, "O", []);
  let gameOver = false;

  const makeMove = function (index) {
    // checking for the gameover
    if (gameOver || gameBoardModule.gameBoard[index] !== "") {
      return;
    }

    const currentPlayer = player1Turn ? player1 : player2;
    // push the player symbols in gameBoard array everytime it is player's turns
    currentPlayer.playerMoves.push(index);
    gameBoardModule.gameBoard[index] = currentPlayer.playerSymbol;
    renderGameBoard.updateBoard();

    if (determineWinner.checkWin(currentPlayer)) {
      gameOver = true;
      return;
    }

    if (!gameBoardModule.gameBoard.includes("")) {
      determineWinner.displayWinner.innerHTML = `<h1> It's a draw! </h1>`;
      gameOver = true;
      return;
    }

    player1Turn = !player1Turn;
  };

  let resetBtn = document.getElementsByClassName("reset")[0];
  resetBtn.addEventListener("click", () => {
    console.log("working");
    gameBoardModule.gameBoard.fill("");
    gameOver = false;
    player1.playerMoves = [];
    player2.playerMoves = [];
    renderGameBoard.updateBoard();
    player1Turn = true;
    determineWinner.displayWinner.innerHTML = "";
  });

  return { makeMove };
})();

// render the gameboard array
const renderGameBoard = (function () {
  let buttonGameBoard = document.querySelectorAll(".btn");

  // function for updating the gameBoard
  const updateBoard = function () {
    buttonGameBoard.forEach((btn, index) => {
      btn.innerHTML = gameBoardModule.gameBoard[index];
    });
  };

  // handle the button clicks for passing the index parameter in makeMove function
  buttonGameBoard.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      displayControllerModule.makeMove(index);
    });
  });

  return { updateBoard };
})();

// logic for checking the winner
const determineWinner = (function () {
  const displayWinner = document.getElementsByClassName("display-winner")[0];
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

<<<<<<< HEAD
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
=======
  const checkWin = function (currentPlayer) {
    for (let i = 0; i < winningCombination.length; i++) {
      let matchCount = 0;
      for (let j = 0; j < winningCombination[i].length; j++) {
        if (currentPlayer.playerMoves.includes(winningCombination[i][j])) {
>>>>>>> xoxo-logic
          matchCount++;
        }
      }
      if (matchCount === 3) {
<<<<<<< HEAD
        console.log(`${player.name} won!`);
=======
        console.log(`${currentPlayer.playerName} won!`);
        displayWinner.innerHTML = `<h1> ${currentPlayer.playerName} wins! </h1>`;
>>>>>>> xoxo-logic
        return true;
      }
    }
    return false;
  };

<<<<<<< HEAD
  return { getUserInput };
};

const game = gameController();
// game.getUserInput();
=======
  return { checkWin, displayWinner };
})();
>>>>>>> xoxo-logic
