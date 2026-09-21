function largestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

largestOfThree(10, 20, 30); // 30
largestOfThree(30, 20, 10); // 30
largestOfThree(10, 30, 20); // 30
largestOfThree(10, 10, 5);  // 10
largestOfThree(10, 5, 10);  // 10
largestOfThree(-5, -2, -10); // -2
largestOfThree(0, 0, 0);     // 0