/* Q13. Write a function `flattenObject(obj)` that flattens one level of nesting:
flattenObject({ a: 1, b: { c: 2, d: 3 } })
 → { a: 1, c: 2, d: 3 }
*/

function flattenObject(obj) {
  const result = {};

  for (let key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      const nestedObject = obj[key];

      for (let nestedKey in nestedObject) {
        result[nestedKey] = nestedObject[nestedKey];
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

const object = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};

console.log(flattenObject(object));
