/* Q7.  Write a function clamp(value, min, max) that restricts a value to be within [min, max].
clamp(15, 0, 10)  // → 10
clamp(-5, 0, 10)  // → 0
clamp(7, 0, 10)   // → 7
*/

function clamp(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

console.log(clamp(15, 0, 10));
// Output: 10

console.log(clamp(-5, 0, 10));
// Output: 0

console.log(clamp(7, 0, 10));
// Output: 7
