/* Q1. Greeting Function
Write a function `greet(name)` that returns `"Hello, <name>! Welcome."`.  
Call it with your own name and print the result.
*/

function greet(name) {
  return "Hello, " + name + "! Welcome.";
}

console.log(greet("Jay"));

/* Q2. Area Calculator
Write three separate functions:

- `areaOfCircle(r)` → returns `π * r²`
- `areaOfRectangle(l, b)` → returns `l * b`
- `areaOfTriangle(b, h)` → returns `0.5 * b * h`
*/

function areaOfCircle(r) {
  return Math.PI * r * r;
}

function areaOfRectangle(l, b) {
  return l * b;
}

function areaOfTriangle(b, h) {
  return 0.5 * b * h;
}

console.log("AreaOfCircle: ", areaOfCircle(5));
console.log("AreaOfRectangle: ", areaOfRectangle(10, 5));
console.log("AreaOfTriangle: ", areaOfTriangle(10, 4));

/* Q3. Temperature Converter
Write two functions:

- `celsiusToFahrenheit(c)` → returns `(c × 9/5) + 32`
- `fahrenheitToCelsius(f)` → returns `(f − 32) × 5/9`
*/

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

console.log("celsiusToFahrenheit: ", celsiusToFahrenheit(25));
console.log("fahrenheitToCelsius: ", fahrenheitToCelsius(77));

/* Q4. Arrow Function - Square and Cube
Write arrow functions:

- `square = (n) => ...` → returns `n²`
- `cube = (n) => ...` → returns `n³`
*/

const square = (n) => {
  return n * n;
};

const cube = (n) => {
  return n * n * n;
};

console.log("square: ", square(5));
console.log("cube: ", cube(3));

/* Q5. Default Parameters
Write a function `introduce(name, role = "Developer", city = "Gujarat")` that returns:
`"Hi, I am <name>, a <role> from <city>."`  
Call it with and without the optional parameters.
*/

function introduce(name, role = "Developer", city = "Gujarat") {
  return "Hi, I am " + name + ", a " + role + " from " + city + ".";
}

console.log(introduce("JAY"));

console.log(introduce("JAY", "Designer", "Ahmedabad"));

/* Q6. Check Palindrome
Write a function `isPalindrome(str)` that returns `true` if the string reads the same forwards and backwards.  
Example: `"racecar"` → `true`, `"hello"` → `false`
*/

function isPalindrome(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }

  return str === reversedString;
}

console.log("isPalindrome: ", isPalindrome("racecar")); // true
console.log("isPalindrome: ", isPalindrome("hello")); // false

/* Q7. Find Maximum in Array
Write a function `findMax(arr)` that takes an array of numbers and returns the largest number without using `Math.max`.
*/

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log("MAX IS :", findMax([10, 25, 7, 40, 15]));

/* Q8. Count Occurrences
Write a function `countOccurrences(arr, target)` that counts how many times `target` appears in `arr`.
Example: `([1, 2, 2, 3, 2], 2)` → `3`
*/

function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2));
