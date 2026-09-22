/* Q16. Recursive Factorial
Write a recursive function `factorial(n)` that calculates `n!` without using any loop.  
Also add a base case to handle `n = 0` and negative numbers.
*/

function factorial(n) {
  // Negative numbers are not valid for factorial
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }

  // Base case
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-2));
