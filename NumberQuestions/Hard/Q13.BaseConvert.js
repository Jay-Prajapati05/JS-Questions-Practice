/* Q13. Write a function baseConvert(numStr, fromBase, toBase) that converts a number string from one base to another (supports bases 2–36).
baseConvert("ff", 16, 2)  // → "11111111"
baseConvert("255", 10, 16) // → "ff"
*/

function baseConvert(numStr, fromBase, toBase) {
  if (fromBase < 2 || fromBase > 36) {
    throw new Error("fromBase must be between 2 and 36.");
  }

  if (toBase < 2 || toBase > 36) {
    throw new Error("toBase must be between 2 and 36.");
  }

  const decimalNumber = parseInt(numStr, fromBase);

  if (Number.isNaN(decimalNumber)) {
    throw new Error("Invalid number for the given base.");
  }

  return decimalNumber.toString(toBase);
}

console.log(baseConvert("ff", 16, 2));
// Output: 11111111

console.log(baseConvert("255", 10, 16));
// Output: ff

console.log(baseConvert("1010", 2, 10));
// Output: 10

console.log(baseConvert("77", 8, 16));
// Output: 3f
