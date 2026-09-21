function checkLeapYear(year) {
  if (year <= 0) {
    console.log("Invalid year");
  } else if (year % 400 === 0) {
    console.log("Leap Year");
  } else if (year % 100 === 0) {
    console.log("Not a Leap Year");
  } else if (year % 4 === 0) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}

checkLeapYear(2024); // Leap Year
checkLeapYear(2023); // Not a Leap Year
checkLeapYear(2000); // Leap Year
checkLeapYear(1900); // Not a Leap Year
checkLeapYear(0);    // Invalid year