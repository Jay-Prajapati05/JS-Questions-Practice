function login(username, password) {
  if (username !== "admin") {
    console.log("Wrong username");
  } else if (password !== "1234") {
    console.log("Wrong password");
  } else {
    console.log("Login successful");
  }
}

login("user", "1234");    // Wrong username
login("admin", "wrong");  // Wrong password
login("admin", "1234");   // Login successful
login("", "");            // Wrong username