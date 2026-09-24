// Q3. Format the number 1234567.89 to display as a currency string: $1,234,567.89. Use toLocaleString().


const number = 1234567.89;

const currency = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

console.log(currency);

// Output:
// $1,234,567.89