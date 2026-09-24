// Q12. Write a function power(base, exp) that computes base^exp for integer exponents using fast exponentiation (exponentiation by squaring) in O(log n) time.

function power(base, exp) {
  if (!Number.isInteger(exp)) {
    return "Exponent must be an integer.";
  }

  if (exp === 0) {
    return 1;
  }

  if (exp < 0) {
    return 1 / power(base, -exp);
  }

  let result = 1;

  while (exp > 0) {
    // If exponent is odd
    if (exp % 2 === 1) {
      result = result * base;
    }

    base = base * base;
    exp = Math.floor(exp / 2);
  }

  return result;
}

console.log(power(2, 5));
// Output: 32

console.log(power(3, 4));
// Output: 81

console.log(power(2, -2));
// Output: 0.25

console.log(power(10, 0));
// Output: 1
