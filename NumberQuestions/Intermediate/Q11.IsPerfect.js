/* Q11. Given a number, write a function that checks if it is a perfect number (a number equal to the sum of its proper divisors).
isPerfect(6)   // → true  (1+2+3 = 6)
isPerfect(28)  // → true  (1+2+4+7+14 = 28)
isPerfect(12)  // → false
*/

function isPerfect(n) {
  if (n <= 1) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum = sum + i;
    }
  }

  return sum === n;
}

console.log(isPerfect(6));
// Output: true

console.log(isPerfect(28));
// Output: true

console.log(isPerfect(12));
// Output: false
