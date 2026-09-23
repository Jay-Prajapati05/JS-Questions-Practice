/* Q19. Write a function `cartesianProduct(...arrays)` that returns the Cartesian product of any number of arrays.
cartesianProduct([1,2], ['a','b'], [true]) 
→ [[1,'a',true],[1,'b',true],[2,'a',true],[2,'b',true]]
*/

function cartesianProduct(...arrays) {
  let result = [[]];

  for (const array of arrays) {
    const newResult = [];

    for (const existingCombination of result) {
      for (const value of array) {
        newResult.push([...existingCombination, value]);
      }
    }

    result = newResult;
  }

  return result;
}

const result = cartesianProduct([1, 2], ["a", "b"], [true]);

console.log(result);

// Output:
// [
//     [1, "a", true],
//     [1, "b", true],
//     [2, "a", true],
//     [2, "b", true]
// ]
