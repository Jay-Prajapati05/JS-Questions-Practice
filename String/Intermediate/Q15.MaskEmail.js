/*Q15. Write a function `maskEmail(email)` that masks part of the email:
maskEmail("alice@example.com") // → "a***e@example.com"
*/

function maskEmail(email) {
  const parts = email.split("@");

  const username = parts[0];
  const domain = parts[1];

  if (username.length <= 2) {
    return username[0] + "***@" + domain;
  }

  const firstCharacter = username[0];
  const lastCharacter = username[username.length - 1];

  const maskedPart = "*".repeat(username.length - 2);

  return firstCharacter + maskedPart + lastCharacter + "@" + domain;
}

console.log(maskEmail("alice@example.com"));
// Output: a***e@example.com

console.log(maskEmail("rahul@example.com"));
// Output: r***l@example.com
