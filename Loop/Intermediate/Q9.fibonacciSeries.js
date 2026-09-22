
/* Q9. Print the first `n` terms of the Fibonacci series using a `for` loop.  
Example: `n = 7` → `0 1 1 2 3 5 8`
*/

function fibonacci(n) {
  if (n <= 0) {
    console.log("Invalid input");
    return;
  }

  let a = 0;
  let b = 1;

  for (let i = 1; i <= n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
  }
}

fibonacci(7);
// 0
// 1
// 1
// 2
// 3
// 5
// 8

fibonacci(1); // 0
fibonacci(0); // Invalid input
fibonacci(-5); // Invalid input