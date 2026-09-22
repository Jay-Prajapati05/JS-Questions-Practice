
/*Q20. Write a function `gcd(a, b)` that finds the Greatest Common Divisor using the Euclidean algorithm with a `while` loop.
Example: `gcd(48, 18)` → `6`
*/

function gcd(a, b) {
  if (a === 0 && b === 0) {
    console.log("GCD is undefined");
    return;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  console.log("GCD:", a);
}

gcd(48, 18);  // GCD: 6
gcd(100, 25); // GCD: 25
gcd(7, 3);    // GCD: 1
gcd(10, 0);   // GCD: 10
gcd(0, 10);   // GCD: 10
gcd(0, 0);    // GCD is undefined
gcd(-48, 18); // GCD: 6