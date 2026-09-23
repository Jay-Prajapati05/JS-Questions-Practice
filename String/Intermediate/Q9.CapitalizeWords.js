// Q9. Write a function capitalize(str) that capitalizes the first letter of every word in a sentence.

function capitalize(str) {
  const words = str.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length === 0) {
      result.push(word);
      continue;
    }

    const firstLetter = word[0].toUpperCase();
    const remainingLetters = word.slice(1).toLowerCase();

    result.push(firstLetter + remainingLetters);
  }

  return result.join(" ");
}

console.log(capitalize("hello world from javascript"));
// Output: Hello World From Javascript
