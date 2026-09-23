/* Q11. Write a function rotate(arr, n) that rotates an array to the right by n positions.
rotate([1, 2, 3, 4, 5], 2) // → [4, 5, 1, 2, 3]
*/

function rotate(arr, n) {
  if (arr.length === 0) {
    return arr;
  }

  // Handles rotations larger than array length
  n = n % arr.length;

  const rotatedArray = arr.slice(-n).concat(arr.slice(0, -n));

  return rotatedArray;
}

console.log(rotate([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]
