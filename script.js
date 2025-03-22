const SIZE = 6;
const board = [
  [2, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 3, 0]
  [0, 0, 0, 0, 3, 0]
  [0, 0, 0, 0, 0, 0]
  [0, 0, 4, 4, 4, 4]
  ];
const guess = Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
const shipSunk = [false, false, false, false, false];
let guessCount = 0;

const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');

function initializeBoard() {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      boardElement.appendChild(cell);
    }
  }
}

function updateBoard() {
 for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const cell = document.querySelector('.cell[data-row='${row}'][data-col='${col}']');
      if (guesses[row][col] === 'X') {
        cell.classList.add('hit');
        cell.textContext = 'X';
      } else if (guesses[row][col] === 'O') {
        cell.classList.add('miss');
        cell.textContext = 'O';
      }
    }
 }
}

function isShipSunk(shipNumber) {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      if (board[row][col] === shipNumber && guesses[row][col] !== 'X') {
        return false;
      }
    }
  }
}

function handleGuess() {
  const guess = guessInput.value.toUpperCase();
  
