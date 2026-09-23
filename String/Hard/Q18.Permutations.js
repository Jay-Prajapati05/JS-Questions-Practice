/* Q18. Write a function that finds all permutations of a given string.
permutations("abc") // → ["abc", "acb", "bac", "bca", "cab", "cba"]
*/

function permutations(str) {
  const result = [];

  function generate(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const character = remaining[i];

      const beforeCharacter = remaining.slice(0, i);
      const afterCharacter = remaining.slice(i + 1);

      const newRemaining = beforeCharacter + afterCharacter;

      generate(current + character, newRemaining);
    }
  }

  generate("", str);

  return result;
}

console.log(permutations("abc"));
