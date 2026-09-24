// Q12. Explain Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER. Write a function safeMultiply(a, b) that throws an error if the result would exceed safe integer bounds. Then demonstrate using BigInt as a workaround.

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991

function safeMultiply(a, b) {
  const result = a * b;

  if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
    throw new Error("Result is outside the safe integer range.");
  }

  return result;
}

console.log(safeMultiply(1000, 2000));
// Output: 2000000

try {
  console.log(safeMultiply(Number.MAX_SAFE_INTEGER, 2));
} catch (error) {
  console.log(error.message);
}

// BigInt can handle very large integers

const bigNumber = BigInt(Number.MAX_SAFE_INTEGER);

const bigResult = bigNumber * 2n;

console.log(bigResult);
// 18014398509481982n
