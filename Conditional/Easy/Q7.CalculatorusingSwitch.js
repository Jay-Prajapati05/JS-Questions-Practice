
// Q7. Write a basic calculator using `switch` that takes two numbers and an operator (`+`, `-`, `*`, `/`) and prints the result. Handle division by zero separately.
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;

    case "-":
      console.log(a - b);
      break;

    case "*":
      console.log(a * b);
      break;

    case "/":
      if (b === 0) {
        console.log("Cannot divide by zero");
      } else {
        console.log(a / b);
      }
      break;

    default:
      console.log("Invalid operator");
  }
}

calculator(10, 5, "+");  // 15
calculator(10, 5, "-");  // 5
calculator(10, 5, "*");  // 50
calculator(10, 5, "/");  // 2
calculator(10, 0, "/");  // Cannot divide by zero
calculator(10, 5, "%");  // Invalid operator