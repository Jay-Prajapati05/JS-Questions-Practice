/* Q6. Remove all duplicate values from an array of numbers.
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // → [1, 2, 3, 4, 5]
*/

function removeDuplicates(arr) {
  const uniqueValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i]);
    }
  }

  return uniqueValues;
}

const numbers = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(numbers));
// Output: [1, 2, 3, 4, 5]
