// Q20.  Implement an `observable(obj)` function that wraps an object and logs a message every time any property is **get** or **set**, using JavaScript `Proxy`.

function observable(obj) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      console.log(`GET: ${String(property)}`);

      return Reflect.get(target, property, receiver);
    },

    set(target, property, value, receiver) {
      console.log(`SET: ${String(property)} = ${value}`);

      return Reflect.set(target, property, value, receiver);
    },
  });
}

// Test

const user = {
  name: "Rahul",
  age: 22,
};

const observableUser = observable(user);

// Get
console.log(observableUser.name);

// Set
observableUser.age = 23;

// Get again
console.log(observableUser.age);
