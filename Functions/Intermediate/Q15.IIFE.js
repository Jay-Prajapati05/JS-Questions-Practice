/* Q15. IIFE - Initialize Config
Write an IIFE (Immediately Invoked Function Expression) that:

1. Sets up a configuration object with `appName`, `version`, and `debugMode`
2. Prints the config
3. Returns the config object stored in a `const`

Explain why IIFE is useful here.
*/

const config = (function () {
  const configData = {
    appName: "My Application",
    version: "1.0.0",
    debugMode: true,
  };

  console.log(configData);

  return configData;
})();

console.log(config);
