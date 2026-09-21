// Q-1. Write a function that takes a number and prints whether it is `"Positive"`, `"Negative"`, or `"Zero"`.

function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkNumber(10);  // Positive
checkNumber(-5);  // Negative
checkNumber(0);   // Zero


