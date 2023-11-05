let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameActive = true;

cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);
});

function checkIfCellEmpty(cell) {
    return cell.textContent === '';
}

function togglePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

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
    cells.forEach(function(cell) {
        if (cell.textContent === ''){
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
document.querySelector('.resetbutton').addEventListener('click', resetGame);

function resetGame() {
    cells.forEach(function(cell) {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    gameActive = true;
    document.querySelector('.resultMessage').textContent = ''; // Clear the result message on reset
}
