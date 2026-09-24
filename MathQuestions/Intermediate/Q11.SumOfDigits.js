// Q11. Write a function sumOfDigits(n) that returns the sum of all digits of a number.

sumOfDigits(12345); // → 15

function sumOfDigits(n) {
  n = Math.abs(n);

  let sum = 0;

  while (n > 0) {
    const digit = n % 10;

    sum = sum + digit;

    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(sumOfDigits(12345));
// Output: 15

console.log(sumOfDigits(987));
// Output: 24

console.log(sumOfDigits(-123));
// Output: 6
