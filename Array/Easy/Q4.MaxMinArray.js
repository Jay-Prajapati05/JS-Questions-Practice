// Q4.  Find the maximum and minimum values in an array of numbers without using `Math.max` or `Math.min`.

function findMaxAndMin(arr) {
  let maximum = arr[0];
  let minimum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }

    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }

  return {
    maximum: maximum,
    minimum: minimum,
  };
}

const numbers = [25, 10, 45, 5, 30];

console.log(findMaxAndMin(numbers));
