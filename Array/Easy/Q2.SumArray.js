// Q2. Write a function sumArray(arr) that returns the sum of all numbers in an array.

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

const numbers = [10, 20, 30, 40, 50];

console.log(sumArray(numbers));
// Output: 150
