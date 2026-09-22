/* Q17. Recursive Fibonacci
Write a recursive function `fibonacci(n)` that returns the `n`th Fibonacci number.  
Example: `fibonacci(7)` → `13`

> Also compare: how many function calls does recursion make vs. the loop version from the Loops file?
*/

function fibonacci(n) {
  // Base cases
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13

// Loop version of Fibonacci

function fibonacciWithLoop(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let next = previous + current;

    previous = current;
    current = next;
  }

  return current;
}

console.log(fibonacciWithLoop(7)); // 13
