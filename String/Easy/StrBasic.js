// Q1. Given a string "  Hello, World!  ", remove all leading and trailing whitespace and log the result.

const text = "  Hello, World!  ";

const cleanedText = text.trim();

console.log(cleanedText);
// Output: Hello, World!

// Q2.  Write a function `reverseString(str)` that reverses a given string without using `.reverse()` directly on the string.

function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }

  return reversedString;
}

console.log(reverseString("hello"));
// Output: olleh

/* Q3.  Check whether a given string is a palindrome (reads the same forwards and backwards). Ignore case.
isPalindrome("Racecar") // → true
isPalindrome("hello")   // → false
*/

function isPalindrome(str) {
  const lowerCaseString = str.toLowerCase();

  let reversedString = "";

  for (let i = lowerCaseString.length - 1; i >= 0; i--) {
    reversedString = reversedString + lowerCaseString[i];
  }

  return lowerCaseString === reversedString;
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false

/* Q4. Write a function that counts how many times a specific character appears in a string.
countChar("banana", "a") // → 3
*/

function countChar(str, target) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countChar("banana", "a"));
// Output: 3

// Q5. Convert the string `"hello world"` to title case: "Hello World".

function titleCase(str) {
  const words = str.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const firstLetter = word[0].toUpperCase();
    const remainingLetters = word.slice(1).toLowerCase();

    result.push(firstLetter + remainingLetters);
  }

  return result.join(" ");
}

console.log(titleCase("hello world"));
// Output: Hello World

// Q6. Given a sentence, return the number of words in it (assume words are separated by single spaces).

function countWords(sentence) {
  if (sentence === "") {
    return 0;
  }

  const words = sentence.split(" ");

  return words.length;
}

console.log(countWords("JavaScript is easy to learn"));
// Output: 5

// Q7. Extract the domain name from an email string "user@example.com" → "example.com".

function getDomain(email) {
  const parts = email.split("@");

  return parts[1];
}

console.log(getDomain("user@example.com"));
// Output: example.com
