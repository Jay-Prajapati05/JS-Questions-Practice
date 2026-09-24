// Q6. Find the hypotenuse of a right triangle given the two other sides, using Math.sqrt and Math.pow (or the operator).

function findHypotenuse(sideA, sideB) {
  const squaredSides = sideA ** 2 + sideB ** 2;

  return Math.sqrt(squaredSides);
}

console.log(findHypotenuse(3, 4));
// Output: 5

console.log(findHypotenuse(5, 12));
// Output: 13
