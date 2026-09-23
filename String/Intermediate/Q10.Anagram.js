/* Q10.  Write a function to check if one string is an anagram of another (same letters, different order). Ignore spaces and case.
isAnagram("listen", "silent") // → true
*/

function isAnagram(str1, str2) {
  const firstString = str1.toLowerCase().replace(/\s/g, "");

  const secondString = str2.toLowerCase().replace(/\s/g, "");

  if (firstString.length !== secondString.length) {
    return false;
  }

  const sortedFirst = firstString.split("").sort().join("");
  const sortedSecond = secondString.split("").sort().join("");

  return sortedFirst === sortedSecond;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("Dormitory", "Dirty room")); // true
