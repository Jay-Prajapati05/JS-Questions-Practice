/* Q21. Custom map, filter and reduce from Scratch
Implement your own versions without using built-in array methods:

- `myMap(arr, fn)` → transforms each element
- `myFilter(arr, fn)` → keeps matching elements
- `myReduce(arr, fn, initial)` → accumulates to a single value

Test: use all three together to:

1. Take an array of numbers
2. Filter out numbers less than 5
3. Double the remaining numbers
4. Sum them all
*/

// Custom map

function myMap(arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }

  return result;
}

// Custom filter

function myFilter(arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Custom reduce

function myReduce(arr, fn, initial) {
  let result = initial;

  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }

  return result;
}

// Testing all three functions

const numbers = [2, 4, 5, 6, 8, 10];

// Step 1: Filter numbers greater than or equal to 5

const filteredNumbers = myFilter(numbers, function (number) {
  return number >= 5;
});

// Step 2: Double the remaining numbers

const doubledNumbers = myMap(filteredNumbers, function (number) {
  return number * 2;
});

// Step 3: Add all numbers

const total = myReduce(
  doubledNumbers,
  function (sum, number) {
    return sum + number;
  },
  0,
);

console.log(filteredNumbers);
console.log(doubledNumbers);
console.log(total);
