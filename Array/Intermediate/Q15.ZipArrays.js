/* Q15.  Write a function zipArrays(arr1, arr2) that combines two arrays into an array of pairs.
zipArrays([1,2,3], ['a','b','c']) // → [[1,'a'],[2,'b'],[3,'c']]
*/

function zipArrays(arr1, arr2) {
    const result = [];

    const length = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < length; i++) {
        result.push([arr1[i], arr2[i]]);
    }

    return result;
}

console.log(zipArrays(
    [1, 2, 3],
    ["a", "b", "c"]
));

// Output:
// [[1, "a"], [2, "b"], [3, "c"]]