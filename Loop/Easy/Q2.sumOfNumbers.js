
/* Q2. Take a number `n` and calculate the sum of all integers from 1 to `n`.  
Example: `n = 5` → `1+2+3+4+5 = 15`
*/

function sumNumbers(n) {
  if (n < 1) {
    console.log("Invalid input");
    return;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  console.log("Sum:", sum);
}

sumNumbers(5);  // Sum: 15
sumNumbers(1);  // Sum: 1
sumNumbers(0);  // Invalid input
sumNumbers(-5); // Invalid input