// Q19. Write a function `deepMerge(obj1, obj2)` that recursively merges two objects. Nested objects should be merged (not overwritten), while primitive values from `obj2` take priority.

function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  Object.keys(obj2).forEach((key) => {
    const value1 = result[key];
    const value2 = obj2[key];

    const bothAreObjects =
      value1 &&
      typeof value1 === "object" &&
      !Array.isArray(value1) &&
      value2 &&
      typeof value2 === "object" &&
      !Array.isArray(value2);

    if (bothAreObjects) {
      result[key] = deepMerge(value1, value2);
    } else {
      result[key] = value2;
    }
  });

  return result;
}

// Test

const object1 = {
  name: "Rahul",
  age: 22,
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
  },
};

const object2 = {
  age: 23,
  address: {
    city: "Surat",
    country: "India",
  },
};

const mergedObject = deepMerge(object1, object2);

console.log(mergedObject);
