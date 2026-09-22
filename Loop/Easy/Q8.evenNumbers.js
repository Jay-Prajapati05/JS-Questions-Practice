
/*Print all even numbers between 1 and 50 using `continue` to skip odd numbers.
 */

function printEvenNumbers() {
  for (let i = 1; i <= 50; i++) {

    // Skip odd numbers
    if (i % 2 !== 0) {
      continue;
    }

    console.log(i);
  }
}

printEvenNumbers();