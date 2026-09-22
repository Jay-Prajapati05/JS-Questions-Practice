// Q1. Create an object `person` with properties `name`, `age`, and `city`. Log each property using dot notation.

const person = {
  name: "Rahul",
  age: 22,
  city: "Ahmedabad",
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

// Q2. Add a new property `email` to an existing object `user` after it has been created. Then delete the `city` property from it.

const user = {
  name: "Rahul",
  age: 22,
  city: "Ahmedabad",
};

// Add a new property
user.email = "rahul@example.com";

console.log(user);

// Delete the city property
delete user.city;

console.log(user);

// Q3. Write a function `getFullName(person)` that accepts a person object with `firstName` and `lastName` and returns the full name as a string.

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

const personInfo = {
  firstName: "Rahul",
  lastName: "Patel",
};

console.log(getFullName(personInfo));

// Q4. Check if a property `salary` exists in an object `employee` using two different methods (`in` operator and `hasOwnProperty`).

const employee = {
  name: "Rahul",
  age: 22,
  department: "Development",
};

// Using the 'in' operator
console.log("salary" in employee);

// Using hasOwnProperty()
console.log(employee.hasOwnProperty("salary"));

// Q5. Create an object car with a method describe() that returns: This car is a [year] [brand] using this.
const car = {
  year: 2024,
  brand: "Toyota",

  describe: function () {
    return "This car is a " + this.year + " " + this.brand;
  },
};

console.log(car.describe());

// Q6. Loop through all key-value pairs of an object `product` using `for...in` and print them as `"key: value"`.

const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
  category: "Electronics",
};

for (let key in product) {
  console.log(key + ": " + product[key]);
}

// Q7. Convert an object `{ name: "Alice", age: 25 }` to an array of keys, values, and entries using built-in Object methods.

const student = {
  name: "Alice",
  age: 25,
};

// Get all keys
const keys = Object.keys(student);

console.log(keys);

// Get all values
const values = Object.values(student);

console.log(values);

// Get key-value pairs
const entries = Object.entries(student);

console.log(entries);
