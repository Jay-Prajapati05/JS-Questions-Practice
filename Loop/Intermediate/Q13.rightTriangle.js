
/*Q13. Print the following pattern for `n = 5` using nested `for` loops:

```
*
* *
* * *
* * * *
* * * * *
 */

function rightTriangle(n) {
  if (n <= 0) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
}

rightTriangle(5);