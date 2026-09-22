
/*Q23. Find All Factors and Check Perfect Number**   
Write a program that:

1. Finds all factors of a number using a `for` loop
2. Sums the factors (excluding the number itself)
3. Checks if it's a **perfect number** (sum of factors = number)
   > Example: `6` → factors: 1, 2, 3 → sum = 6 
 */

function checkPerfectNumber(num) {
  if (num <= 0) {
    console.log("Invalid number");
    return;
  }

  let sum = 0;
  let factors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
      sum = sum + i;
    }
  }

  console.log("Factors:", factors.join(", "));
  console.log("Sum:", sum);

  if (sum === num) {
    console.log("Perfect Number");
  } else {
    console.log("Not a Perfect Number");
  }
}

checkPerfectNumber(6);
// Factors: 1, 2, 3
// Sum: 6
// Perfect Number

checkPerfectNumber(28);
// Factors: 1, 2, 4, 7, 14
// Sum: 28
// Perfect Number

checkPerfectNumber(10);
// Factors: 1, 2, 5
// Sum: 8
// Not a Perfect Number

checkPerfectNumber(1);
// Factors:
// Sum: 0
// Not a Perfect Number

checkPerfectNumber(0);
// Invalid number

checkPerfectNumber(-6);
// Invalid number