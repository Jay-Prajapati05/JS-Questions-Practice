/* Q10. Write a function `invertObject(obj)` that swaps all keys and values of an object.
invertObject({ a: 1, b: 2 }) // → { 1: 'a', 2: 'b' }
*/

function invertObject(obj) {
  const invertedObject = {};

  for (let key in obj) {
    const value = obj[key];

    invertedObject[value] = key;
  }

  return invertedObject;
}

console.log(invertObject({ a: 1, b: 2 }));
