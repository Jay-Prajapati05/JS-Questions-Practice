
// Q1. Take a number `n` as input and print all numbers from 1 to `n` using a `for` loop.

function printNumbers(n) {
  if (n < 1) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);
// 1
// 2
// 3
// 4
// 5

printNumbers(1);
// 1

printNumbers(0);
// Invalid input

printNumbers(-5);
// Invalid input