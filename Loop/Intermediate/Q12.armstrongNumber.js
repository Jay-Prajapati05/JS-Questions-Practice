
/*Q12. Check if a number is an Armstrong (narcissistic) number or not.

> A number is Armstrong if: sum of each digit raised to the power of total digits = the number itself.
> Example: `153` → `1³ + 5³ + 3³ = 153` 
 */

function checkArmstrong(num) {
  if (num < 0) {
    console.log("Invalid number");
    return;
  }

  let original = num;
  let temp = num;
  let digits = 0;

  // Count digits
  if (num === 0) {
    digits = 1;
  } else {
    while (temp > 0) {
      digits++;
      temp = Math.floor(temp / 10);
    }
  }

  // Calculate Armstrong sum
  temp = num;
  let sum = 0;

  while (temp > 0) {
    let digit = temp % 10;
    sum = sum + digit ** digits;
    temp = Math.floor(temp / 10);
  }

  if (sum === original) {
    console.log("Armstrong Number");
  } else {
    console.log("Not an Armstrong Number");
  }
}

checkArmstrong(153); // Armstrong Number
checkArmstrong(370); // Armstrong Number
checkArmstrong(9474); // Armstrong Number
checkArmstrong(123); // Not an Armstrong Number
checkArmstrong(0);   // Armstrong Number
checkArmstrong(-153); // Invalid number