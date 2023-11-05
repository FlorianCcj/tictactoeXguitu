createWinningCombinations = (size) => {
  fctWinningCombinations = [];

  //// Row Management
  for (let i_row = 0; i_row < size; i_row++) {
    firstRowElement = i_row * size;
    fctCells = []
    for (let i_cell = 0; i_cell < size; i_cell++) {
      fctCells.push(firstRowElement + i_cell);
    }
    fctWinningCombinations.push(fctCells)
  }

  //// Column Management
  for (let i_col = 0; i_col < size; i_col++) {
    firstRowElement = i_col * size;
    fctCells = []
    for (let i_cell = 0; i_cell < size; i_cell++) {
      fctCells.push(i_col + i_cell * size);
    }
    fctWinningCombinations.push(fctCells)
  }

  //// Diagonal Management
  const firstDiagonal = []
  for (let i_cell = 0; i_cell < size; i_cell++) {
    firstDiagonal.push(i_cell * (size + 1))
  }
  fctWinningCombinations.push(firstDiagonal)

  const secondDiagonal = []
  for (let i_cell = 0; i_cell < size; i_cell++) {
    secondDiagonal.push((i_cell + 1) * (size - 1))
  }
  fctWinningCombinations.push(secondDiagonal)

  return fctWinningCombinations
}

isADraw = (tictactoeCells) => {
  isDraw = true;
  tictactoeCells.forEach((i_cell) => {
    if (i_cell.textContent === '') {
      isDraw =  false;
    }
  });
  return isDraw;
}

isAWin = (tictactoeCells, fctWinningCombinations) => {
  const winningCombinationsLength = fctWinningCombinations.length;

  for (let i = 0; i < winningCombinationsLength; i++) {
    firstComboPlayer = tictactoeCells[fctWinningCombinations[i][0]].textContent;

    let combo_result = true;
    for (const i_cell of fctWinningCombinations[i]) {
      combo_result &= firstComboPlayer === tictactoeCells[i_cell].textContent;
      console.log('test ' + i_cell);
      console.log('test ' + firstComboPlayer + '-' + tictactoeCells[i_cell].textContent + `(${i_cell})`);
    }
    if (combo_result) {
      return true;
    }
  }
  return false;
}

isCellEmpty = (cell) => {
  return cell.textContent === '';
}

togglePlayer = (player) => {
  return (player === playerOneSymbole) ? playerTwoSymbole : playerOneSymbole;
}
