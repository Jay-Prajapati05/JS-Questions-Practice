/* Q19. Memoization
Write a function `memoize(fn)` that takes any function and returns a memoized version of it.  
The memoized version should cache results so the same input isn't computed twice.  
Test it with a slow Fibonacci function using `console.time` to show the speedup.
*/

function memoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    const result = fn(n);
    cache[n] = result;

    return result;
  };
}

// Slow Fibonacci function

function slowFibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

// Memoized Fibonacci

const fibonacci = memoize(function (n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.time("Without Memoization");
console.log(slowFibonacci(35));
console.timeEnd("Without Memoization");

console.time("With Memoization");
console.log(fibonacci(35));
console.timeEnd("With Memoization");
