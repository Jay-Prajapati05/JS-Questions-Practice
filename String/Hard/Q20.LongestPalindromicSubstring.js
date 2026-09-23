/* Q20. Write a function `longestPalindromicSubstring(str)` that finds the longest palindromic substring using the expand-around-center approach.
longestPalindromicSubstring("babad") // → "bab" or "aba"
*/

function longestPalindromicSubstring(str) {
  if (str.length < 2) {
    return str;
  }

  let longest = "";

  function expandFromCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return str.slice(left + 1, right);
  }

  for (let i = 0; i < str.length; i++) {
    // Odd length palindrome
    const oddPalindrome = expandFromCenter(i, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    // Even length palindrome
    const evenPalindrome = expandFromCenter(i, i + 1);

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}

console.log(longestPalindromicSubstring("babad"));
// Output: "bab" or "aba"

console.log(longestPalindromicSubstring("cbbd"));
// Output: "bb"
