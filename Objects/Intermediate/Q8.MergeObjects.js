// Q.8 Write a function `mergeObjects(obj1, obj2)` that merges two objects. If both have the same key, the value from `obj2` should win. Do not use the spread operator — use `Object.assign
function mergeObjects(obj1, obj2) {
  const mergedObject = Object.assign({}, obj1, obj2);

  return mergedObject;
}

const firstObject = {
  name: "Rahul",
  age: 22,
};

const secondObject = {
  age: 23,
  city: "Ahmedabad",
};

console.log(mergeObjects(firstObject, secondObject));
