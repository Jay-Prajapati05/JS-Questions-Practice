
// Q8. Take a month number (1–12) using `switch` and print the season:
function findSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;

    case 3:
    case 4:
    case 5:
      console.log("Summer");
      break;

    case 6:
    case 7:
    case 8:
      console.log("Monsoon");
      break;

    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;

    default:
      console.log("Invalid month");
  }
}

findSeason(1);   // Winter
findSeason(6);   // Monsoon
findSeason(12);  // Winter
findSeason(0);   // Invalid month
findSeason(13);  // Invalid month
findSeason(-1);  // Invalid month