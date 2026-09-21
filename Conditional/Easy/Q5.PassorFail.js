
// Q5. Take marks (out of 100) as input. Print `"Pass"` if marks >= 40, else `"Fail"`.
function checkResult(marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
  } else if (marks >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

checkResult(-5);    // Invalid marks
checkResult(0);     // Fail
checkResult(39);    // Fail
checkResult(40);    // Pass
checkResult(100);   // Pass
checkResult(105);   // Invalid marks