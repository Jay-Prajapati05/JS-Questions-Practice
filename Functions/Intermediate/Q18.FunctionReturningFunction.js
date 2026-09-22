/* Q18. Function Returning Function
Write a function `multiplier(x)` that returns a new function. The returned function takes a number `y` and returns `x * y`.

```js
const double = multiplier(2);
const triple = multiplier(3);
double(5); // 10
triple(5); // 15
*/

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
