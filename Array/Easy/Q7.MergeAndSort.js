// Q7. Merge two arrays and sort the result in ascending order.

function mergeAndSort(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);

  mergedArray.sort(function (a, b) {
    return a - b;
  });

  return mergedArray;
}

const firstArray = [5, 2, 8, 1];
const secondArray = [7, 3, 6, 4];

console.log(mergeAndSort(firstArray, secondArray));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
