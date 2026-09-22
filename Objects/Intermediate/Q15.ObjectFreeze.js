// Q.15 Use `Object.freeze()` on a config object and demonstrate that its properties cannot be changed. What happens when you try to update a property in strict mode vs. non-strict mode?
"use strict";

const config = {
  appName: "My App",
  version: "1.0.0",
  debugMode: true,
};

Object.freeze(config);

console.log(config);

// Try to change a property
config.version = "2.0.0";

console.log(config);
