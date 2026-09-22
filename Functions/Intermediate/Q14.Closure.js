/* Q14. Closure - Counter
Write a function `createCounter()` that returns an object with three methods:

- `increment()` → increases count by 1
- `decrement()` → decreases count by 1
- `getCount()` → returns current count

The count must be private (not directly accessible from outside).
*/

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },

    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.getCount()); // 0

counter.increment();
counter.increment();

console.log(counter.getCount()); // 2

counter.decrement();

console.log(counter.getCount()); // 1
