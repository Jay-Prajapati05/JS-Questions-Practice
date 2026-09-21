
// Q18. Write a program that takes moves of two players and returns who wins or if it's a draw.
function rockPaperScissors(player1, player2) {
  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();

  // Check valid moves
  if (
    !["rock", "paper", "scissors"].includes(player1) ||
    !["rock", "paper", "scissors"].includes(player2)
  ) {
    console.log("Invalid move");
  } else if (player1 === player2) {
    console.log("Draw");
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    console.log("Player 1 wins");
  } else {
    console.log("Player 2 wins");
  }
}

rockPaperScissors("rock", "scissors");     // Player 1 wins
rockPaperScissors("paper", "rock");        // Player 1 wins
rockPaperScissors("scissors", "rock");     // Player 2 wins
rockPaperScissors("rock", "rock");         // Draw
rockPaperScissors("Rock", "Paper");        // Player 2 wins
rockPaperScissors("hello", "rock");        // Invalid move