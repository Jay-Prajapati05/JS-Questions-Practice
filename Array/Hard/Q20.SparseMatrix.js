// Q20.  Implement a sparse matrix using arrays: given a 2D array that mostly contains zeros, create a compressed representation and a function to retrieve any element efficiently.

function createSparseMatrix(matrix) {
    const values = {};

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            const value = matrix[row][column];

            // Only store non-zero values
            if (value !== 0) {
                const key = `${row},${column}`;

                values[key] = value;
            }
        }
    }

    return {
        rows: matrix.length,
        columns: matrix[0].length,
        values: values
    };
}


function getElement(sparseMatrix, row, column) {
    const key = `${row},${column}`;

    // If value doesn't exist, it is zero
    return sparseMatrix.values[key] ?? 0;
}


// Test

const matrix = [
    [0, 0, 5, 0],
    [0, 8, 0, 0],
    [0, 0, 0, 0],
    [3, 0, 0, 7]
];

const sparseMatrix = createSparseMatrix(matrix);

console.log(sparseMatrix);

console.log(getElement(sparseMatrix, 0, 2));
// Output: 5

console.log(getElement(sparseMatrix, 1, 1));
// Output: 8

console.log(getElement(sparseMatrix, 2, 2));
// Output: 0