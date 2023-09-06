const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let board = Array(9).fill(null);

function calculateWinner(squares) {

  const winningInstance = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //for loop that checks the winner based on the board status and the winningInstance declared
  for (let i = 0; i < winningInstance.length; i++) {
    const [a, b, c] = winningInstance[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

// Route to start a new game
app.post('/api/new-game', (req, res) => {
  board = Array(9).fill(null);
  res.json({ squares: board });
});

// Route to make a move
app.post('/api/make-move', (req, res) => {
  const { squareIndex, player } = req.body;
  if (board[squareIndex] === null) {
    board[squareIndex] = player;
    const winner = calculateWinner(board);
    res.json({ squares: board, winner });
  } else {
    res.status(400).json({ error: 'Invalid move' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
