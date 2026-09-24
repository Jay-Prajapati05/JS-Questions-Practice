/* Q13.  Write a function primeFactors(n) that returns all prime factors of a number.
primeFactors(360) // → [2, 2, 2, 3, 3, 5]
*/

function primeFactors(n) {
  const factors = [];

  // Handle factor 2 separately
  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  // Check odd numbers
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  // If remaining number is greater than 1,
  // it is also a prime factor
  if (n > 1) {
    factors.push(n);
  }

  return factors;
}

console.log(primeFactors(360));
// Output: [2, 2, 2, 3, 3, 5]

console.log(primeFactors(100));
// Output: [2, 2, 5, 5]
