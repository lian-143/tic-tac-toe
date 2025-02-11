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
  name: "PLayer 2",
  symbol: "X",
});
