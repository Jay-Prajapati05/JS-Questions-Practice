/* Q9. Function Expression vs Declaration
Rewrite the `greet` function (Q1) as:

1. A **function expression** stored in a variable
2. An **arrow function**

Observe the difference in hoisting: try calling each version before its definition and note what happens.
*/

// Function Declaration
function greet(name) {
  return "Hello, " + name + "! Welcome.";
}

console.log(greet("Rahul"));

// Function Expression
const greetExpression = function (name) {
  return "Hello, " + name + "! Welcome.";
};

console.log(greetExpression("Rahul"));

// Arrow Function
const greetArrow = (name) => {
  return "Hello, " + name + "! Welcome.";
};

console.log(greetArrow("Rahul"));

// Hoisting

// Function declaration can be called before its definition
console.log(greetBefore("Rahul"));

function greetBefore(name) {
  return "Hello, " + name + "!";
}

// Function expression cannot be used before its definition
// console.log(greetExpressionBefore("Rahul"));

const greetExpressionBefore = function (name) {
  return "Hello, " + name + "!";
};

// Arrow function also cannot be used before its definition
// console.log(greetArrowBefore("Rahul"));

const greetArrowBefore = (name) => {
  return "Hello, " + name + "!";
};
