/* Q2. Write a function that rounds a number to a specified number of decimal places.
roundTo(3.14159, 2); // → 3.14
*/
function roundTo(number, decimalPlaces) {
  const multiplier = 10 ** decimalPlaces;

  return Math.round(number * multiplier) / multiplier;
}

console.log(roundTo(3.14159, 2));
// Output: 3.14

console.log(roundTo(5.6789, 3));
// Output: 5.679
