/* Q18. Given an array of integers, find all unique triplets that sum to zero.
threeSum([-1, 0, 1, 2, -1, -4]) // → [[-1, -1, 2], [-1, 0, 1]]
*/

function threeSum(arr) {
  const result = [];

  // Sort the array first
  const numbers = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < numbers.length - 2; i++) {
    // Skip duplicate first values
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[i] + numbers[left] + numbers[right];

      if (sum === 0) {
        result.push([numbers[i], numbers[left], numbers[right]]);

        // Skip duplicate values
        while (left < right && numbers[left] === numbers[left + 1]) {
          left++;
        }

        while (left < right && numbers[right] === numbers[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Output:
// [[-1, -1, 2], [-1, 0, 1]]
