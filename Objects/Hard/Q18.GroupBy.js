/* Q18. Implement a `groupBy(arr, key)` function that groups an array of objects by a given property:
```js
groupBy([
  { name: 'Alice', dept: 'HR' },
  { name: 'Bob', dept: 'IT' },
  { name: 'Carol', dept: 'HR' }
], 'dept')
// → { HR: [{...}, {...}], IT: [{...}] }
*/

function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const groupValue = item[key];

    if (!groups[groupValue]) {
      groups[groupValue] = [];
    }

    groups[groupValue].push(item);

    return groups;
  }, {});
}

// Test

const employees = [
  {
    name: "Alice",
    dept: "HR",
  },
  {
    name: "Bob",
    dept: "IT",
  },
  {
    name: "Carol",
    dept: "HR",
  },
];

const groupedEmployees = groupBy(employees, "dept");

console.log(groupedEmployees);
