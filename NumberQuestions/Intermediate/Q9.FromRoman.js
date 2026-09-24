// Q9. Write a function fromRoman(str) that converts a Roman numeral string back to an integer.

function fromRoman(str) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const currentValue = values[str[i]];
    const nextValue = values[str[i + 1]];

    if (nextValue > currentValue) {
      result = result - currentValue;
    } else {
      result = result + currentValue;
    }
  }

  return result;
}

console.log(fromRoman("MMXXIV"));
// Output: 2024

console.log(fromRoman("IX"));
// Output: 9

console.log(fromRoman("XL"));
// Output: 40
