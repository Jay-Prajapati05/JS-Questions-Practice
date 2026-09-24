// Q1. Explain and demonstrate the difference between parseInt(42.9px), parseFloat(42.9px), and Number(42.9px). What does each return?

const value = "42.9px";

const result1 = parseInt(value);
const result2 = parseFloat(value);
const result3 = Number(value);

console.log("parseInt:", result1);
console.log("parseFloat:", result2);
console.log("Number:", result3);

// Output:
// parseInt: 42
// parseFloat: 42.9
// Number: NaN
