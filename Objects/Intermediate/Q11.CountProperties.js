// Q11. Write a function `countProperties(obj)` that returns the number of own properties in an object, without using `Object.keys().length` directly.

function countProperties(obj) {
  let count = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }

  return count;
}

const employee = {
  name: "Rahul",
  age: 22,
  department: "Development",
};

console.log(countProperties(employee)); // 3
