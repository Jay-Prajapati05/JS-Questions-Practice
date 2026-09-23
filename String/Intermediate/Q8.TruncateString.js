/* Q8. Write a function truncate(str, maxLength) that shortens a string to maxLength characters and appends "..." if it was shortened.
truncate("Hello World", 7) // → Hello W...
*/

function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + "...";
}

console.log(truncate("Hello World", 7));
// Output: Hello W...
