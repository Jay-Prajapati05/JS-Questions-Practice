// Q4. Demonstrate the classic JS floating point quirk: 0.1 + 0.2. Then write a function safeAdd(a, b, decimals) that adds two floats correctly up to decimals decimal places.

console.log(0.1 + 0.2);

// Output:
// 0.30000000000000004

function safeAdd(a, b, decimals) {
  const multiplier = 10 ** decimals;

  const result = Math.round((a + b) * multiplier) / multiplier;

  return result;
}

console.log(safeAdd(0.1, 0.2, 2));
// Output: 0.3

console.log(safeAdd(1.25, 2.35, 2));
// Output: 3.6
