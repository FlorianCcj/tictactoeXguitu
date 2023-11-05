function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      gameActive = false;
      document.querySelector('.resultMessage').textContent = 'Le gagnant est ' + currentPlayer + '!';
      return true;
    }
  }
  return false; // No winner yet
}

function checkForDraw() {
  let isDraw = true;
  cells.forEach(function (cell) {
    if (cell.textContent === '') {
      isDraw = false;
    }
  });
  if (isDraw) {
    gameActive = false;
    document.querySelector('.resultMessage').textContent = 'Match nul!';
  }
  return isDraw;
}

function cellClicked(event) {
  if (!gameActive) return;

  var cell = event.target;
  if (checkIfCellEmpty(cell)) {
    cell.textContent = currentPlayer;
    console.log('Player ' + currentPlayer + ' moved');
    if (checkWinner()) {
      alert('The winner is on the board');
    } else if (checkForDraw()) {
      alert('The game is a draw');
    } else {
      togglePlayer();
      console.log('Toggled Player, new player is ' + currentPlayer);
    }
  }
}

function resetGame() {
  cells.forEach(function (cell) {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameActive = true;
  document.querySelector('.resultMessage').textContent = ''; // Clear the result message on reset
}
