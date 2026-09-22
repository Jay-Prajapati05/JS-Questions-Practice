
/*Q22. Print a hollow square for `n = 5`:

* * * * *
*       *
*       *
*       *
* * * * *

Print `*` only for border positions; use spaces inside.
 */

function hollowSquare(n) {
  if (n <= 0) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n; j++) {

      if (
        i === 1 ||
        i === n ||
        j === 1 ||
        j === n
      ) {
        row = row + "* ";
      } else {
        row = row + "  ";
      }
    }

    console.log(row);
  }
}

hollowSquare(5);