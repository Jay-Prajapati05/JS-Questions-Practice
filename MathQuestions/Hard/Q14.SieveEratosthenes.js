// Q14. Write a function sieveOfEratosthenes(n) that returns all prime numbers up to n using the Sieve of Eratosthenes algorithm, optimized to run efficiently for large values of n (e.g., n = 1,000,000).

function sieveOfEratosthenes(n) {
  if (n < 2) {
    return [];
  }

  // Assume every number is prime initially
  const isPrime = new Array(n + 1).fill(true);

  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      // Mark multiples of i as not prime
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(sieveOfEratosthenes(30));

// Output:
// [
//     2, 3, 5, 7, 11,
//     13, 17, 19, 23, 29
// ]
