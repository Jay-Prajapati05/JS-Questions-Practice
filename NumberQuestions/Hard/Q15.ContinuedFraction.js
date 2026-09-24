// Q15. Write a function continuedFraction(num, maxTerms) that approximates a real number as a continued fraction and returns the list of coefficients. Then write the inverse function to reconstruct the number from those coefficients.

function continuedFraction(num, maxTerms) {
  const coefficients = [];
  let value = num;

  for (let i = 0; i < maxTerms; i++) {
    const wholePart = Math.floor(value);

    coefficients.push(wholePart);

    const decimalPart = value - wholePart;

    if (decimalPart === 0) {
      break;
    }

    value = 1 / decimalPart;
  }

  return coefficients;
}

// Convert continued fraction coefficients
// back into an approximate number

function fromContinuedFraction(coefficients) {
  let result = coefficients[coefficients.length - 1];

  for (let i = coefficients.length - 2; i >= 0; i--) {
    result = coefficients[i] + 1 / result;
  }

  return result;
}

// Example

const coefficients = continuedFraction(Math.PI, 6);

console.log(coefficients);

const approximateValue = fromContinuedFraction(coefficients);

console.log(approximateValue);
