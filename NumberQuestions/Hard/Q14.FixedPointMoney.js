// Q14. Implement a fixed-point arithmetic system using integers to avoid floating-point errors. Write add, subtract, multiply, and divide functions that represent money values in cents internally and display them in dollars.

function toCents(dollars) {
  return Math.round(dollars * 100);
}

function toDollars(cents) {
  return (cents / 100).toFixed(2);
}

function add(amount1, amount2) {
  const cents1 = toCents(amount1);
  const cents2 = toCents(amount2);

  return toDollars(cents1 + cents2);
}

function subtract(amount1, amount2) {
  const cents1 = toCents(amount1);
  const cents2 = toCents(amount2);

  return toDollars(cents1 - cents2);
}

function multiply(amount, quantity) {
  const cents = toCents(amount);

  return toDollars(cents * quantity);
}

function divide(amount, quantity) {
  const cents = toCents(amount);

  return toDollars(cents / quantity);
}

console.log(add(10.5, 5.25));
// $15.75

console.log(subtract(20.0, 7.5));
// $12.50

console.log(multiply(10.5, 3));
// $31.50

console.log(divide(10.0, 4));
// $2.50
