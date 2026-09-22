
/*Calculate the factorial of a given number using a `for` loop.  
Example: `5! = 120`
 */

function factorial(n) {
  if (n < 0) {
    console.log("Factorial is not defined for negative numbers");
    return;
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  console.log(n + "! =", result);
}

factorial(5); // 5! = 120
factorial(3); // 3! = 6
factorial(1); // 1! = 1
factorial(0); // 0! = 1
factorial(-5); // Factorial is not defined for negative numbers