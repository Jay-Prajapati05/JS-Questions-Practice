
/*Take a number and print its multiplication table from 1 to 10 using a `for` loop.  
Example: `5 × 1 = 5`, `5 × 2 = 10`,
 */

function multiplicationTable(num) {
  if (num < 0) {
    console.log("Invalid number");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(num + " × " + i + " = " + (num * i));
  }
}

multiplicationTable(5);
// 5 × 1 = 5
// 5 × 2 = 10
// ...
// 5 × 10 = 50

multiplicationTable(0);
// 0 × 1 = 0
// ...
// 0 × 10 = 0

multiplicationTable(-5);
// Invalid number