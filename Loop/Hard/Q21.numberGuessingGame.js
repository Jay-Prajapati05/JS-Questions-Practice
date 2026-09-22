
/*Q21. Simulate a number guessing game:

- Generate a random number between 1 and 50
- Use a `do-while` loop to keep asking the user to guess
- Print `"Too high"` or `"Too low"` hints
- `break` when guessed correctly
- Count and display the total number of attempts
 */

function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 50) + 1;

  let guess;
  let attempts = 0;

  do {
    guess = Number(prompt("Guess a number between 1 and 50:"));
    attempts++;

    if (guess < 1 || guess > 50) {
      console.log("Please enter a number between 1 and 50");
      continue;
    }

    if (guess > randomNumber) {
      console.log("Too high");
    } else if (guess < randomNumber) {
      console.log("Too low");
    } else {
      console.log("Correct!");
      console.log("Attempts:", attempts);
      break;
    }

  } while (true);
}

guessingGame();