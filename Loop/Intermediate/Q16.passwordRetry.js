
/*Q16. Simulate a login system:

- The correct password is `"js@123"`
- Allow maximum 3 attempts using a `do-while` loop
- Break out of the loop early if the correct password is entered
- Print how many attempts were used
 */

function loginSystem() {
  const correctPassword = "js@123";
  let attempts = 0;
  let password;

  do {
    password = prompt("Enter password:");
    attempts++;

    if (password === correctPassword) {
      console.log("Login successful");
      break;
    }

    console.log("Wrong password");

  } while (attempts < 3);

  console.log("Attempts used:", attempts);

  if (password !== correctPassword) {
    console.log("Account locked");
  }
}

loginSystem();