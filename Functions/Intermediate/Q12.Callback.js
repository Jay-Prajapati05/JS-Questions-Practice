/* Q12. Callback Function - Array Processor
Write a function `processArray(arr, callback)` that applies `callback` to every element and returns a new array.
Test it by:

1. Passing a callback that doubles each number
2. Passing a callback that converts each string to uppercase
*/

function processArray(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

// Double each number
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = processArray(numbers, function (number) {
  return number * 2;
});

console.log(doubledNumbers);

// Convert strings to uppercase
const names = ["rahul", "amit", "neha"];

const upperCaseNames = processArray(names, function (name) {
  return name.toUpperCase();
});

console.log(upperCaseNames);
