const gameBoard = function () {
  let number = 1;
  let grid = [];

  for (let i = 0; i < 3; i++) {
    let rows = [];
    for (let j = 0; j < 3; j++) {
      rows.push(number);
      number++;
    }
    grid.push(rows);
  }
  console.log(grid);
};

gameBoard();

const createPlayers = ({ name, symbol }) => ({
  name,
  symbol,
});

const player1 = createPlayers({
  name: "Player1",
  symbol: "O",
});

const player2 = createPlayers({
  name: "Player 2",
  symbol: "X",
});

// take the user input from grid
const getUserInput = function (grid) {
  let numberOfRounds = 9;
  let player1Turn = false;

  //   switching turns
  for (let i = 0; i < numberOfRounds; i++) {
    player1Turn = !player1Turn;
    if (player1Turn) {
      let userInput = Number(
        window.prompt("Choose number between 1-9 to place your symbol:")
      );
      console.log(`Player 1 move: ${userInput}`);
    } else {
      let userInput = Number(
        window.prompt("Choose number between 1-9 to place your symbol:")
      );
      console.log(`player 2 move: ${userInput}`);
    }
  }
};

// getUserInput();
