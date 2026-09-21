
// Q3.  Write a program that takes a person's age and prints `"Eligible to Vote"` if age is 18 or above, otherwise `"Not Eligible"`.
function checkVotingEligibility(age) {
  if (age < 0) {
    console.log("Invalid Age");
  } else if (age >= 18) {
    console.log("Eligible to Vote");
  } else {
    console.log("Not Eligible");
  }
}

checkVotingEligibility(-5);   // Invalid Age
checkVotingEligibility(0);    // Not Eligible
checkVotingEligibility(17);   // Not Eligible
checkVotingEligibility(18);   // Eligible to Vote
checkVotingEligibility(100);  // Eligible to Vote 