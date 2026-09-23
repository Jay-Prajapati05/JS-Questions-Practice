// Q10. Given an array of objects with name and age, sort the array by age in ascending order, and by name alphabetically if ages are equal.

function sortPeople(people) {
  return people.sort(function (a, b) {
    // First compare age
    if (a.age !== b.age) {
      return a.age - b.age;
    }

    // If age is same, compare names
    return a.name.localeCompare(b.name);
  });
}

const people = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 22 },
  { name: "Neha", age: 22 },
  { name: "Priya", age: 25 },
];

console.log(sortPeople(people));
