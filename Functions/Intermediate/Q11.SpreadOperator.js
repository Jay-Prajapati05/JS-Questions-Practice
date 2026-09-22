/* Q11. Spread Operator with Functions
You have an array `const scores = [78, 92, 55, 88, 70]`.
Write a function `getStats(arr)` that uses the spread operator to find:

- Minimum score
- Maximum score
- Average score
*/

const scores = [78, 92, 55, 88, 70];

function getStats(arr) {
    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }

    let average = total / arr.length;

    return {
        minimum: minimum,
        maximum: maximum,
        average: average
    };
}

console.log(getStats(scores));

