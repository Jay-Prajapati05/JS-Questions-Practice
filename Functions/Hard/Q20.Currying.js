/* Q20. Currying
Write a curried function `add(a)(b)(c)` that adds three numbers.  
Then write a generic `curry(fn)` utility that converts any regular multi-argument function into a curried one.  
Example:

```js
const curriedAdd = curry((a, b, c) => a + b + c);
curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
*/

// Simple curried function

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6

// Generic curry function

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

// Testing generic curry

const normalAdd = (a, b, c) => {
  return a + b + c;
};

const curriedAdd = curry(normalAdd);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
