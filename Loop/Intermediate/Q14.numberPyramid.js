
/*Q14. Print this pattern for `n = 5`:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

 */

function numberPyramid(n) {
  if (n <= 0) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + j + " ";
    }

    console.log(row);
  }
}

numberPyramid(5);