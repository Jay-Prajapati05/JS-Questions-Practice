// Q16. Write a function `deepClone(obj)` that performs a deep clone of a nested object **without** using `JSON.parse/JSON.stringify` or any library. Handle nested objects and arrays.

function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const clonedObject = {};

  Object.keys(value).forEach((key) => {
    clonedObject[key] = deepClone(value[key]);
  });

  return clonedObject;
}

// Test

const original = {
  name: "Rahul",
  age: 22,
  skills: ["JavaScript", "HTML", "CSS"],
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
  },
};

const copy = deepClone(original);

copy.name = "Amit";
copy.address.city = "Surat";
copy.skills.push("React");

console.log("Original:", original);
console.log("Copy:", copy);
