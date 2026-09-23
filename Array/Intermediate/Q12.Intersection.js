/* Q12.  Write a function intersection(arr1, arr2) that returns an array of values found in both arrays (no duplicates).
intersection([1, 2, 3, 4], [2, 4, 6]) → [2, 4]
*/

function intersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];

    if (arr2.includes(value) && !result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

console.log(intersection([1, 2, 3, 4], [2, 4, 6]));
// Output: [2, 4]
