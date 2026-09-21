
/*Q21. Write a program that takes a number from 1 to 20 and prints it in words using `switch`.
Example: `5` → `"Five"`, `13` → `"Thirteen"`
*/
function numberToWords(num) {
  switch (num) {
    case 1:
      console.log("One");
      break;

    case 2:
      console.log("Two");
      break;

    case 3:
      console.log("Three");
      break;

    case 4:
      console.log("Four");
      break;

    case 5:
      console.log("Five");
      break;

    case 6:
      console.log("Six");
      break;

    case 7:
      console.log("Seven");
      break;

    case 8:
      console.log("Eight");
      break;

    case 9:
      console.log("Nine");
      break;

    case 10:
      console.log("Ten");
      break;

    case 11:
      console.log("Eleven");
      break;

    case 12:
      console.log("Twelve");
      break;

    case 13:
      console.log("Thirteen");
      break;

    case 14:
      console.log("Fourteen");
      break;

    case 15:
      console.log("Fifteen");
      break;

    case 16:
      console.log("Sixteen");
      break;

    case 17:
      console.log("Seventeen");
      break;

    case 18:
      console.log("Eighteen");
      break;

    case 19:
      console.log("Nineteen");
      break;

    case 20:
      console.log("Twenty");
      break;

    default:
      console.log("Invalid number");
  }
}

numberToWords(5);   // Five
numberToWords(13);  // Thirteen
numberToWords(20);  // Twenty
numberToWords(1);   // One
numberToWords(0);   // Invalid number
numberToWords(21);  // Invalid number
numberToWords(-5);  // Invalid number