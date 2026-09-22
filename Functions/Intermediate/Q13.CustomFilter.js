/* Q13. Higher-Order Function - Custom Filter
Write your own version of `Array.filter` named `myFilter(arr, testFn)`.
It should return a new array containing only elements for which `testFn` returns `true`.  
Test: filter out all odd numbers from `[1, 2, 3, 4, 5, 6, 7, 8]`.
*/

function myFilter(arr, testFn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (testFn(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbersForFilter = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = myFilter(numbersForFilter, function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8]
