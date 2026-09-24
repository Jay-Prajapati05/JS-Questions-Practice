// Q5. Calculate the area of a circle given its radius. Use Math.PI and round to 2 decimal places.

function circleArea(radius) {
  const area = Math.PI * radius ** 2;

  return Math.round(area * 100) / 100;
}

console.log(circleArea(5));
// Output: 78.54
