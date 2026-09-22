
/*Create a simple menu-driven program using `do-while`:

1. Say Hello
2. Show current date
3. Exit

The menu should keep showing until the user selects Exit (option 3).
 */

function menu() {
  let choice;

  do {
    console.log("\n--- Menu ---");
    console.log("1. Say Hello");
    console.log("2. Show current date");
    console.log("3. Exit");

    choice = Number(prompt("Enter your choice:"));

    if (choice === 1) {
      console.log("Hello!");
    } else if (choice === 2) {
      console.log("Current date:", new Date());
    } else if (choice === 3) {
      console.log("Goodbye!");
    } else {
      console.log("Invalid choice");
    }

  } while (choice !== 3);
}

menu();