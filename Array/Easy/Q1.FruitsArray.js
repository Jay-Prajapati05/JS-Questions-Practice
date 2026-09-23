// Q1. Create an array of 5 fruits. Add a new fruit to the end, another to the beginning, and then remove one from each end. Log the final array.

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Add a fruit at the end
fruits.push("Pineapple");

// Add a fruit at the beginning
fruits.unshift("Watermelon");

// Remove one fruit from the beginning
fruits.shift();

// Remove one fruit from the end
fruits.pop();

console.log(fruits);
