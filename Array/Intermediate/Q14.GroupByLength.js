/* Q14. Write a function `groupByLength(words)` that groups an array of words by their length.
groupByLength(["cat","dog","elephant","ant","bee"]) → { 3: ["cat","dog","ant","bee"], 8: ["elephant"] }
*/

function groupByLength(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const length = word.length;

    if (!result[length]) {
      result[length] = [];
    }

    result[length].push(word);
  }

  return result;
}

const words = ["cat", "dog", "elephant", "ant", "bee"];

console.log(groupByLength(words));
