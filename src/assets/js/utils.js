function checkIfCellEmpty(cell) {
    return cell.textContent === '';
}

function togglePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}
