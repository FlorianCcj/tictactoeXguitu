createTicTacToeTable = (size) => {
  var table = document.createElement('table');
  table.id = "tictactoe-table"

  var tbody = table.createTBody();
  for (let i_row = 0; i_row < size; i_row++) {
    const row = tbody.insertRow();
    for (let i_cel = 0; i_cel < size; i_cel++) {
      var cell1 = row.insertCell(i_cel);
      cell1.classList.add('cell');
      cell1.id = 'cell' + (i_row * size + i_cel);
    }
  }

  document.getElementById('tictactoe-container').appendChild(table);
}

cellClicked = (event) => {
  if (!gameActive) return;

  let cell = event.target;
  if (isCellEmpty(cell)) {
    cell.textContent = currentPlayer;
    if (isAWin(cells, winningCombinations.filter(i_combo => i_combo.indexOf(+cell.id.replace('cell', '')) !== -1))) {
      gameActive = false;
      document.querySelector('.resultMessage').textContent = 'The winner is ' + currentPlayer + '!';
    } else if (isADraw(cells)) {
      gameActive = false;
      document.querySelector('.resultMessage').textContent = 'Draw!';
    } else {
      currentPlayer = togglePlayer(currentPlayer);
      console.log('Toggled Player, new player is ' + currentPlayer);
    }
  }
}

resetGame = () => {
  cells.forEach((i_cell) => {
    i_cell.textContent = '';
  });
  currentPlayer = playerOneSymbole;
  gameActive = true;
  document.querySelector('.resultMessage').textContent = '';
}
