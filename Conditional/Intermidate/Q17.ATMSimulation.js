function atm(pin, amount, balance) {
  // Step 1: Check PIN
  if (pin !== 1234) {
    console.log("Incorrect PIN");
  } else {
    console.log("PIN is correct");

    // Step 2: Check withdrawal amount
    if (amount <= 0) {
      console.log("Invalid withdrawal amount");
    } else if (amount % 100 !== 0) {
      console.log("Amount must be a multiple of 100");
    } else {
      console.log("Withdrawal amount is valid");

      // Step 3: Check balance
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance = balance - amount;
        console.log("Withdrawal successful");
        console.log("Remaining balance: ₹" + balance);
      }
    }
  }
}

atm(1111, 1000, 5000);
// Incorrect PIN

atm(1234, 550, 5000);
// PIN is correct
// Amount must be a multiple of 100

atm(1234, 1000, 500);
// PIN is correct
// Withdrawal amount is valid
// Insufficient balance

atm(1234, 1000, 5000);
// PIN is correct
// Withdrawal amount is valid
// Withdrawal successful
// Remaining balance: ₹4000