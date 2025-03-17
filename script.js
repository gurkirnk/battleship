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
  for
