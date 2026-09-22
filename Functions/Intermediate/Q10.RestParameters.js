/* Q10. Rest Parameters - Sum All
Write a function `sumAll(...numbers)` using rest parameters that accepts any number of arguments and returns their sum.
Example: `sumAll(1, 2, 3, 4, 5)` → `15`
*/

function sumAll(...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(10, 20, 30));     // 60
