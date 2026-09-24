// Q6. Write a function isInteger(n) that returns true if the number has no fractional part,without using Number.isInteger()

function isInteger(n) {
  return typeof n === "number" && Number.isFinite(n) && Math.floor(n) === n;
}

console.log(isInteger(10));
// true

console.log(isInteger(10.5));
// false

console.log(isInteger(-5));
// true

console.log(isInteger("10"));
// false

console.log(isInteger(Infinity));
// false
