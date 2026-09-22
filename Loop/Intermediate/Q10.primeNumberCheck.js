
/*Q10. Write a program that uses a loop to check if a number is prime or not.
 */

function checkPrime(num) {
  if (num <= 1) {
    console.log("Not Prime");
    return;
  }

  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Prime");
  } else {
    console.log("Not Prime");
  }
}

checkPrime(7);  // Prime
checkPrime(10); // Not Prime
checkPrime(2);  // Prime
checkPrime(1);  // Not Prime
checkPrime(0);  // Not Prime
checkPrime(-5); // Not Prime