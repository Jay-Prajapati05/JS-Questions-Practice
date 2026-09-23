/* Q12.  Write a function `camelToSnake(str)` that converts a camelCase string to snake_case.
camelToSnake("myVariableName") // → "my_variable_name"
*/

function camelToSnake(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character >= "A" && character <= "Z") {
      result = result + "_" + character.toLowerCase();
    } else {
      result = result + character;
    }
  }

  return result;
}

console.log(camelToSnake("myVariableName"));
// Output: my_variable_name

console.log(camelToSnake("firstName"));
// Output: first_name
