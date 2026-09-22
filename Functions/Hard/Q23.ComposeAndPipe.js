/* Q23. Compose and Pipe
Write two utility functions:

- `compose(...fns)` → applies functions right to left
- `pipe(...fns)` → applies functions left to right

```js
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x * x;

pipe(double, addTen, square)(3); // ((3*2)+10)² = 256
compose(square, addTen, double)(3); // same result
*/

// Pipe
// Functions execute from left to right

function pipe(...functions) {
  return function (value) {
    let result = value;

    for (let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }

    return result;
  };
}

// Compose
// Functions execute from right to left

function compose(...functions) {
  return function (value) {
    let result = value;

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
}

// Test functions

const double = (x) => {
  return x * 2;
};

const addTen = (x) => {
  return x + 10;
};

const square = (x) => {
  return x * x;
};

// Pipe: left to right

const pipeResult = pipe(double, addTen, square)(3);

console.log(pipeResult); // 256

// Compose: right to left

const composeResult = compose(square, addTen, double)(3);

console.log(composeResult); // 256
