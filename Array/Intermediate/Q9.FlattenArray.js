/* Q9. Write a function flattenArray(arr) that flattens a deeply nested array into a single-level array without using .flat().
flattenArray([1, [2, [3, [4]]]]) // → [1, 2, 3, 4]
*/

function flattenArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flattenedValues = flattenArray(arr[i]);

      for (let j = 0; j < flattenedValues.length; j++) {
        result.push(flattenedValues[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, [4]]]]));
// Output: [1, 2, 3, 4]
