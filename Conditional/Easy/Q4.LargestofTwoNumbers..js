
// Q4. Take two numbers as input and print the larger one. If they are equal, print `"Both are equal"`.
function largestOfTwo(a, b) {
  if (a === b) {
    console.log("Both are equal");
  } else if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

largestOfTwo(10, 20);  // 20
largestOfTwo(20, 10);  // 20
largestOfTwo(10, 10);  // Both are equal
largestOfTwo(-5, -10); // -5
largestOfTwo(0, -5);   // 0