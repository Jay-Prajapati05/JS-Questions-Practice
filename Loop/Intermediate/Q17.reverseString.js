
/*Q17. Take a string as input and reverse it character by character using a `for` loop (without using `.reverse()`).  
Example: `"hello"` → `"olleh"`
 */

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  console.log("Original:", str);
  console.log("Reversed:", reversed);
}

reverseString("hello");
// Reversed: olleh

reverseString("JavaScript");
// Reversed: tpircSavaJ

reverseString("");
// Reversed: 

reverseString("a");
// Reversed: a