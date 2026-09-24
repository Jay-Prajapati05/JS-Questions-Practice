/* Q10.  Write a function formatNumber(n) that formats a large number with short suffixes:
formatNumber(1500)       // → "1.5K"
formatNumber(2000000)    // → "2M"
formatNumber(3500000000) // → "3.5B"
*/

function formatNumber(n) {
  const absoluteNumber = Math.abs(n);

  if (absoluteNumber >= 1000000000) {
    return (n / 1000000000).toFixed(1).replace(".0", "") + "B";
  }

  if (absoluteNumber >= 1000000) {
    return (n / 1000000).toFixed(1).replace(".0", "") + "M";
  }

  if (absoluteNumber >= 1000) {
    return (n / 1000).toFixed(1).replace(".0", "") + "K";
  }

  return String(n);
}

console.log(formatNumber(1500));
// Output: 1.5K

console.log(formatNumber(2000000));
// Output: 2M

console.log(formatNumber(3500000000));
// Output: 3.5B

console.log(formatNumber(500));
// Output: 500
