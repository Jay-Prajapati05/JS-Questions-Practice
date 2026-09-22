
/*Q18. Loop through a string and count the number of vowels (`a, e, i, o, u`) using a `for` loop and `continue` to skip consonants.
 */

function countVowels(str) {
  let count = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {

    if (
      str[i] !== "a" &&
      str[i] !== "e" &&
      str[i] !== "i" &&
      str[i] !== "o" &&
      str[i] !== "u"
    ) {
      continue;
    }

    count++;
  }

  console.log("Vowels:", count);
}

countVowels("hello");       // Vowels: 2
countVowels("JavaScript");  // Vowels: 3
countVowels("HELLO");       // Vowels: 2
countVowels("xyz");         // Vowels: 0
countVowels("");            // Vowels: 0
countVowels("12345");       // Vowels: 0