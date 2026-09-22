
/*Take a number and count how many digits it has using a `while` loop.  
Example: `4567` → `4 digits`
 */

function countDigits(num) {
  if (num < 0) {
    console.log("Invalid number");
    return;
  }

  if (num === 0) {
    console.log("1 digit");
    return;
  }

  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  console.log(count + " digits");
}

countDigits(4567); // 4 digits
countDigits(100);  // 3 digits
countDigits(5);    // 1 digits
countDigits(0);    // 1 digit
countDigits(-123); // Invalid number