/* Q11. Replace all occurrences of a word in a sentence without using `.replaceAll()`. Use a regex or a loop.
replaceAll("the cat sat on the mat", "the", "a") // → "a cat sat on a mat"
*/

function replaceAll(str, oldWord, newWord) {
  const regex = new RegExp(oldWord, "g");

  return str.replace(regex, newWord);
}

const sentence = "the cat sat on the mat";

console.log(replaceAll(sentence, "the", "a"));
// Output: a cat sat on a mat
