/* Q1. Generate a random integer between two given numbers min and max (both inclusive).
randomInt(5, 15) // could return 5, 6, ..., or 15
*/

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(5, 15));
// Output: any integer from 5 to 15
