
/*Q15. Print all prime numbers between 1 and 100. Use `continue` to skip non-primes and `break` inside the inner loop when a factor is found.
 */

function printPrimes(start, end) {
  if (start > end) {
    console.log("Invalid range");
    return;
  }

  for (let num = start; num <= end; num++) {

    if (num < 2) {
      continue;
    }

    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (!isPrime) {
      continue;
    }

    console.log(num);
  }
}

printPrimes(1, 100);