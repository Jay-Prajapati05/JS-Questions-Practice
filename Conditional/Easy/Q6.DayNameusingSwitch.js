
// Q6. Write a program using `switch` that takes a number (1–7) and prints the corresponding day name (1 = Monday, 7 = Sunday). Print `"Invalid day"` for anything else.
function getDayName(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;

    case 2:
      console.log("Tuesday");
      break;

    case 3:
      console.log("Wednesday");
      break;

    case 4:
      console.log("Thursday");
      break;

    case 5:
      console.log("Friday");
      break;

    case 6:
      console.log("Saturday");
      break;

    case 7:
      console.log("Sunday");
      break;

    default:
      console.log("Invalid day");
  }
}

getDayName(1);   // Monday
getDayName(7);   // Sunday
getDayName(0);   // Invalid day
getDayName(8);   // Invalid day
getDayName(-1);  // Invalid day