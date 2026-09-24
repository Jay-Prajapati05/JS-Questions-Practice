// Q3. Given a number, return its absolute value without using Math.abs().

function absoluteValue(number) {
  if (number < 0) {
    return -number;
  }

  return number;
}

console.log(absoluteValue(-10));
// Output: 10

console.log(absoluteValue(15));
// Output: 15
