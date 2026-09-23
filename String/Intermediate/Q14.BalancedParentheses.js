/* Q14. Given a string with balanced parentheses check — write a function that returns `true` if every opening bracket has a matching closing bracket in the correct order.
isBalanced("(hello (world))") // → true
isBalanced("(hello (world)")  // → false
*/

function isBalanced(str) {
  let balance = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      balance++;
    }

    if (str[i] === ")") {
      balance--;

      // Closing bracket before opening bracket
      if (balance < 0) {
        return false;
      }
    }
  }

  // All opening brackets must have closing brackets
  return balance === 0;
}

console.log(isBalanced("(hello (world))")); // true
console.log(isBalanced("(hello (world)")); // false
console.log(isBalanced("hello world")); // true
