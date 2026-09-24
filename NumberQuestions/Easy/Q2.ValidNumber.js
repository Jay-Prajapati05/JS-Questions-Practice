// Q2. Write a function that checks whether a value is a valid finite number (not Naz, not Infinity, not a string).

function isValidNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

console.log(isValidNumber(100));
// true

console.log(isValidNumber(10.5));
// true

console.log(isValidNumber("100"));
// false

console.log(isValidNumber(NaN));
// false

console.log(isValidNumber(Infinity));
// false
