
/*Take a number and reverse its digits using a `while` loop.  
Example: `1234` → `4321`
 */

function reverseNumber(num) {
  if (num < 0) {
    console.log("Invalid number");
    return;
  }

  let reverse = 0;
  let original = num;

  while (num > 0) {
    let digit = num % 10;
    reverse = (reverse * 10) + digit;
    num = Math.floor(num / 10);
  }

  console.log("Original:", original);
  console.log("Reverse:", reverse);
}

reverseNumber(1234);
// Original: 1234
// Reverse: 4321

reverseNumber(500);
// Reverse: 5

reverseNumber(0);
// Reverse: 0

reverseNumber(-123);
// Invalid number