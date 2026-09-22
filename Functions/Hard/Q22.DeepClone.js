/* Q22. Deep Clone using Recursion
Write a recursive function `deepClone(obj)` that creates a true deep copy of a nested object/array.  
It should handle:

- Nested objects
- Arrays inside objects
- Primitives (string, number, boolean)
*/

function deepClone(value) {
  // Primitive values can be returned directly
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle arrays
  if (Array.isArray(value)) {
    let clonedArray = [];

    for (let i = 0; i < value.length; i++) {
      clonedArray.push(deepClone(value[i]));
    }

    return clonedArray;
  }

  // Handle objects
  let clonedObject = {};

  for (let key in value) {
    clonedObject[key] = deepClone(value[key]);
  }

  return clonedObject;
}

// Testing deepClone

const original = {
  name: "Rahul",
  age: 22,
  skills: ["JavaScript", "HTML", "CSS"],
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
  },
};

const copiedObject = deepClone(original);

console.log(copiedObject);

// Change the copied object

copiedObject.name = "Amit";
copiedObject.address.city = "Surat";
copiedObject.skills.push("React");

console.log("Original:", original);
console.log("Copy:", copiedObject);
