/* Q17.  Implement a simple `sprintf(template, ...args)` function that replaces `{}` placeholders with the given arguments in order.
sprintf("Hello {}, you are {} years old", "Alice", 25)
→ "Hello Alice, you are 25 years old"
*/

function sprintf(template, ...args) {
  let result = template;

  for (let i = 0; i < args.length; i++) {
    result = result.replace("{}", args[i]);
  }

  return result;
}

console.log(sprintf("Hello {}, you are {} years old", "Alice", 25));

// Hello Alice, you are
