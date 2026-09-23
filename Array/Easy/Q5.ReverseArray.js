// Q5.  Write a function `reverseArray(arr)` that reverses an array **without** using the built-in `.reverse()` method.

function reverseArray(arr) {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

const numbers = [1, 2, 3, 4, 5];

console.log(reverseArray(numbers));
// Output: [5, 4, 3, 2, 1]
