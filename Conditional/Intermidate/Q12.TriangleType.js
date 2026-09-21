function triangleType(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Invalid triangle");
  } else if (a + b + c !== 180) {
    console.log("Invalid triangle");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}

triangleType(60, 60, 60); // Equilateral
triangleType(70, 70, 40); // Isosceles
triangleType(50, 60, 70); // Scalene
triangleType(90, 60, 30); // Scalene
triangleType(90, 90, 10); // Invalid triangle
triangleType(0, 90, 90);  // Invalid triangle
triangleType(-10, 100, 90); // Invalid triangle