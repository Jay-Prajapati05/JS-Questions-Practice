/* Q13. Write a function `compressString(str)` that compresses repeated characters:
compressString("aaabbbccddddee") // → "a3b3c2d4e2"
If the compressed version is not shorter, return the original string.
*/

function compressString(str) {
  if (str.length === 0) {
    return str;
  }

  let compressedString = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressedString = compressedString + str[i] + count;
      count = 1;
    }
  }

  // Return original if compressed version is not shorter
  if (compressedString.length >= str.length) {
    return str;
  }

  return compressedString;
}

console.log(compressString("aaabbbccddddee"));
// Output: a3b3c2d4e2

console.log(compressString("abcdef"));
// Output: abcdef
