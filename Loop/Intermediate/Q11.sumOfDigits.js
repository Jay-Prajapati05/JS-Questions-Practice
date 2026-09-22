
/*Q11. Take a number and find the sum of its individual digits using a `while` loop.  
Example: `1234` → `1+2+3+4 = 10`
 */

function sumOfDigits(num) {
  if (num < 0) {
    console.log("Invalid number");
    return;
  }

  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }

  console.log("Sum:", sum);
}

sumOfDigits(1234); // Sum: 10
sumOfDigits(456);  // Sum: 15
sumOfDigits(5);    // Sum: 5
sumOfDigits(0);    // Sum: 0
sumOfDigits(-123); // Invalid number