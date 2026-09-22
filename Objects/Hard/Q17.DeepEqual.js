// Q17. Write a function `deepEqual(obj1, obj2)` that returns `true` if two objects are deeply equal (same keys and values at every level), and `false` otherwise.

function deepEqual(obj1, obj2) {
  // Same reference or same primitive value
  if (obj1 === obj2) {
    return true;
  }

  // null or different data types
  if (obj1 === null || obj2 === null || typeof obj1 !== typeof obj2) {
    return false;
  }

  // Only objects are handled from this point
  if (typeof obj1 !== "object") {
    return false;
  }

  // One is array and other is not
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Different number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      return false;
    }

    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Test

const object1 = {
  name: "Rahul",
  age: 22,
  address: {
    city: "Ahmedabad",
  },
};

const object2 = {
  name: "Rahul",
  age: 22,
  address: {
    city: "Ahmedabad",
  },
};

const object3 = {
  name: "Rahul",
  age: 23,
  address: {
    city: "Ahmedabad",
  },
};

console.log(deepEqual(object1, object2)); // true
console.log(deepEqual(object1, object3)); // false
