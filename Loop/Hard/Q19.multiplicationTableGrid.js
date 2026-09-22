
/*Q19. Q19. Multiplication Table Grid (Nested Loops)**  
Print a 5×5 multiplication table grid:

 1  2  3  4  5
 2  4  6  8 10
 3  6  9 12 15
 4  8 12 16 20
 5 10 15 20 25
 */

function multiplicationGrid(n) {
  if (n <= 0) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n; j++) {
      row = row + (i * j) + "\t";
    }

    console.log(row);
  }
}

multiplicationGrid(5);