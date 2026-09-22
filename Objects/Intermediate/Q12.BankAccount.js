// Q12. Create a `bank account` object with a private-like balance (using closure or convention) and methods `deposit(amount)`, `withdraw(amount)`, and `getBalance()`. Prevent overdraft.
function createBankAccount() {
  let balance = 0;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance = balance + amount;
        console.log("Amount deposited:", amount);
      } else {
        console.log("Please enter a valid amount.");
      }
    },

    withdraw: function (amount) {
      if (amount <= 0) {
        console.log("Please enter a valid amount.");
      } else if (amount > balance) {
        console.log("Insufficient balance.");
      } else {
        balance = balance - amount;
        console.log("Amount withdrawn:", amount);
      }
    },

    getBalance: function () {
      return balance;
    },
  };
}

// Testing the bank account

const account = createBankAccount();

account.deposit(5000);

console.log("Current balance:", account.getBalance());

account.withdraw(2000);

console.log("Current balance:", account.getBalance());

account.withdraw(5000);

console.log("Current balance:", account.getBalance());
