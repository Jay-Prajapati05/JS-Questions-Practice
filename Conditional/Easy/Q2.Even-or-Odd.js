
// Q2. Write a function that takes a number and prints `"Even"` or `"Odd"`.

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(10);  // Even
checkEvenOdd(7);   // Odd
checkEvenOdd(0);   // Even
checkEvenOdd(-4);  // Even
checkEvenOdd(-7);  // Odd