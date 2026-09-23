// Q16.  Implement your own version of `Array.prototype.reduce` from scratch (call it `myReduce`). It should work with or without an initial value.

function myReduce(arr, callback, initialValue) {
  let result;
  let startIndex;

  if (initialValue !== undefined) {
    result = initialValue;
    startIndex = 0;
  } else {
    result = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }

  return result;
}

// With initial value

const numbers = [1, 2, 3, 4];

const sum = myReduce(
  numbers,
  function (total, number) {
    return total + number;
  },
  0,
);

console.log(sum);
// 10

// Without initial value

const product = myReduce(numbers, function (total, number) {
  return total * number;
});

console.log(product);
// 24
