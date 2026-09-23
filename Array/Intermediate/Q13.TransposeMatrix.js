/* Q13. Given a matrix (2D array), write a function that transposes it (swap rows and columns).
transpose([[1,2,3],[4,5,6]]) // → [[1,4],[2,5],[3,6]]
*/

function transpose(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const result = [];

  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let column = 0; column < columns; column++) {
    const newRow = [];

    for (let row = 0; row < rows; row++) {
      newRow.push(matrix[row][column]);
    }

    result.push(newRow);
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(matrix));

// Output:
// [
//     [1, 4],
//     [2, 5],
//     [3, 6]
// ]
