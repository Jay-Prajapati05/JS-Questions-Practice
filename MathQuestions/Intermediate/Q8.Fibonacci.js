// Q8.  Write a function fibonacci(n) that returns the nth Fibonacci number. Then write a second version using memoization and compare performance.


function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Enter a non-negative integer.";
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));
// Output: 13

// Q8. Fibonacci with Memoization

function fibonacciMemoized(n, memo = {}) {
  if (!Number.isInteger(n) || n < 0) {
    return "Enter a non-negative integer.";
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);

  return memo[n];
}

console.log(fibonacciMemoized(7));
// Output: 13
