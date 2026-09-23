/* Q16. Write a function longestCommonSubstring(str1, str2) that returns the longest common substring between two strings.
longestCommonSubstring("abcdef", "zcdemf") // → "cde"
*/
function longestCommonSubstring(str1, str2) {
  let longest = "";

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let current = "";
      let x = i;
      let y = j;

      while (x < str1.length && y < str2.length) {
        if (str1[x] !== str2[y]) {
          break;
        }

        current = current + str1[x];

        x++;
        y++;
      }

      if (current.length > longest.length) {
        longest = current;
      }
    }
  }

  return longest;
}

console.log(longestCommonSubstring("abcdef", "zcdemf"));
// cde
