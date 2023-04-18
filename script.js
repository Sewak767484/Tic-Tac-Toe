let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

function makeMove(index) {
  if (gameBoard[index] === '' && !gameEnded) {
    gameBoard[index] = currentPlayer;
    document.getElementById('tic-tac-toe-board').children[index].textContent = currentPlayer;
    document.getElementById('tic-tac-toe-board').children[index].style.pointerEvents = 'none'; // Disable further clicks on the same box
    checkWin();
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameEnded = true;
      document.getElementById('tic-tac-toe-board').children[a].style.backgroundColor = 'green';
      document.getElementById('tic-tac-toe-board').children[b].style.backgroundColor = 'green';
      document.getElementById('tic-tac-toe-board').children[c].style.backgroundColor = 'green';
      alert(`Player ${currentPlayer === 'X' ? 'X' : 'O'} wins!`);
      break;
    }
  }
}
function resetGame(){
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameEnded = false;
    currentPlayer = 'X';
    const cells = document.getElementById('tic-tac-toe-board').children;
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = ''; // Set textContent to empty string
      cells[i].style.backgroundColor = '';
      cells[i].style.pointerEvents = 'auto'; // Enable clicks on the cells
    }
  }
// function resetGame(){
//   gameBoard = ['', '', '', '', '', '', '', '', ''];
//   gameEnded = false;
//   currentPlayer = 'X';
//   confirm("Game is being going to reset");
//   document.getElementById('tic-tac-toe-board').children.forEach((cell) => {
//     cell.textContent = '';
//     cell.style.backgroundColor = '';
//     cell.style.pointerEvents = 'auto'; // Enable clicks on the cells
//   });
// }
// function resetGame(){
//     console.log("Before reset: ", gameBoard, gameEnded, currentPlayer); // Add this line for debugging
//     gameBoard = ['', '', '', '', '', '', '', '', ''];
//     gameEnded = false;
//     currentPlayer = 'X';
//     document.getElementById('tic-tac-toe-board').children.forEach((cell) => {
//       cell.textContent = '';
//       cell.style.backgroundColor = '';
//       cell.style.pointerEvents = 'auto'; // Enable clicks on the cells
//     });
//     console.log("After reset: ", gameBoard, gameEnded, currentPlayer); // Add this line for debugging
//   }


  
  
