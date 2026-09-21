function calculateGrade(marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
  } else if (marks >= 90) {
    console.log("A+");
  } else if (marks >= 75) {
    console.log("A");
  } else if (marks >= 60) {
    console.log("B");
  } else if (marks >= 45) {
    console.log("C");
  } else {
    console.log("Fail");
  }
}

calculateGrade(95);  // A+
calculateGrade(90);  // A+
calculateGrade(75);  // A
calculateGrade(60);  // B
calculateGrade(45);  // C
calculateGrade(44);  // Fail
calculateGrade(100); // A+
calculateGrade(-5);  // Invalid marks
calculateGrade(105); // Invalid marks