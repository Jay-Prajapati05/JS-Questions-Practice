// Q9.  Write a function gcd(a, b) that finds the Greatest Common Divisor of two numbers using the Euclidean algorithm. Then write lcm(a, b) using it.

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const remainder = a % b;

    a = b;
    b = remainder;
  }

  return a;
}

function lcm(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  return Math.abs(a * b) / gcd(a, b);
}

console.log(gcd(48, 18));
// Output: 6

console.log(lcm(4, 6));
// Output: 12
