const DEBUG = 0;

debug = (debugLvl, log) => {
  if (DEBUG >= debugLvl) {
    log();
  }
}

printOkorNok = (result) => {
  if (result) {
    console.log('+++++ ok')
  } else {
    console.error('---- /!\\ error /!\\')
  }
}

it = (title, callback) => {
  console.group(title);
  callback();
  console.groupEnd();
}

it('-> test createWinningCombinations()', () => {
  debugLog = (result, theoricalResult) => {
    console.log(`theoricalResult: ${JSON.stringify(theoricalResult)}`);
    console.log(`result: ${JSON.stringify(result)}`);
  }

  it('--> it should work with size=1', () => {
    result = createWinningCombinations(1);
    theoricalResult = [
      [0], // row
      [0], // column
      [0], [0] // diag
    ];

    debug(1, () => { debugLog(result, theoricalResult); });
    printOkorNok(JSON.stringify(result) === JSON.stringify(theoricalResult));
  });

  it('--> it should work with size=3', () => {
    result = createWinningCombinations(3);
    theoricalResult = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
      [0, 4, 8], [2, 4, 6] // diag
    ];

    debug(1, () => { debugLog(result, theoricalResult); });
    printOkorNok(JSON.stringify(result) === JSON.stringify(theoricalResult));
  });

  it('--> it should work with size=4', () => {
    result = createWinningCombinations(4);
    theoricalResult = [
      [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], // row
      [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], // column
      [0, 5, 10, 15], [3, 6, 9, 12] // diag
    ];

    debug(1, () => { debugLog(result, theoricalResult); });
    printOkorNok(JSON.stringify(result) === JSON.stringify(theoricalResult));
  });
});

it('-> test togglePlayer()', () => {
  debugLog = (result, theoricalResult) => {
    console.log(`theoricalResult: ${theoricalResult}`);
    console.log(`result: ${result}`);
  }

  it('--> it should switch to player two if it current player is player one', () => {
    result = togglePlayer(playerOneSymbole);
    theoricalResult = playerTwoSymbole;

    debug(1, () => { debugLog(result, theoricalResult); });
    printOkorNok(result === theoricalResult);
  });

  it('--> it should switch to player one if it current player is player two', () => {
    result = togglePlayer(playerTwoSymbole);
    theoricalResult = playerOneSymbole;

    debug(1, () => { debugLog(result, theoricalResult); });
    printOkorNok(result === theoricalResult);
  });
});
