// Q7. Write a function `factorial(n)` that computes the factorial of a number. Handle negative inputs and decimals gracefully.

function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Factorial is only defined for non-negative integers.";
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));
// Output: 120

console.log(factorial(0));
// Output: 1

console.log(factorial(-2));
// Output: Factorial is only defined for non-negative integers.

console.log(factorial(3.5));
// Output: Factorial is only defined for non-negative integers.
