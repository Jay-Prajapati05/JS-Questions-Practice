/* Q17. Write a function longestConsecutiveSequence(arr) that finds the length of the longest consecutive sequence of integers in an unsorted array.
longestConsecutiveSequence([100, 4, 200, 1, 3, 2]) // → 4  (1,2,3,4)
*/

function longestConsecutiveSequence(arr) {
  const numbers = new Set(arr);
  let longestLength = 0;

  for (const number of numbers) {
    // Start checking only if this is
    // the beginning of a sequence
    if (!numbers.has(number - 1)) {
      let currentNumber = number;
      let currentLength = 1;

      while (numbers.has(currentNumber + 1)) {
        currentNumber++;
        currentLength++;
      }

      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }
  }

  return longestLength;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));

// Output: 4
// Sequence: 1, 2, 3, 4
